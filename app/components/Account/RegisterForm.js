import React, {useState} from "react"
import{ StyleSheet,View} from "react-native";
import {Input,Icon,Button} from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import Loading from "../Loading";
import {size,isEmpty} from 'lodash';
import * as firebase from 'firebase';
import {useNavigation} from "@react-navigation/native"

export default function RegisterForm(props){
    const {toastRef}=props;
    const [showPassword,setShowPassword]=useState(false);
    const [showRepeatPassword,setShowRepeatPassword]=useState(false);
    const [formData,setFormData]=useState(defaultFormValue());
    const [loading,setLoading]=useState(false);
    const navigation=useNavigation();


    const onSubmit=()=>{
        if(isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){
            toastRef.current.show("Todos los campos son obligatorios!");
        }else if(!validateEmail(formData.email)){
            toastRef.current.show("El email no es correcto");
        }else if(formData.password!==formData.repeatPassword){
            toastRef.current.show("Las contraseñas deben ser iguales!");
        }else if(size(formData.password)<6){
            toastRef.current.show("La contraseña debe tener al menos 6 carácteres");
        }else{
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password).then(
                ()=>{
                    setLoading(false);
                    toastRef.current.show("OK");
                    navigation.navigate("account");
                }).catch(()=>{
                    setLoading(false);
                    toastRef.current.show("El email ya está en uso, pruebe con otro");
                });
        }
    }

    const onChange=(e,type)=>{
        // setFormData({[type]:e.nativeEvent.text});
        setFormData({...formData,[type]:e.nativeEvent.text})
    }

    return (
        <View style={styles.formContainer}>
            <Input 
            placeholder="Correo electrónico"
            containerStyle={styles.inputForm} 
            autoCapitalize = 'none'
            onChange={e=>onChange(e,"email")}
            rightIcon={
                <Icon iconStyle={styles.iconRight}
                    type="material-community"
                    name="at"
                />
            }
            />
            <Input
            placeholder="Contraseña"
            containerStyle={styles.inputForm} 
            onChange={e=>onChange(e,"password")}
            password={true}
            secureTextEntry={!showPassword}
            rightIcon={
                <Icon iconStyle={styles.iconRight}
                    type="material-community"
                    name={showPassword?"eye-off-outline":"eye-outline"}
                    onPress={()=>setShowPassword(!showPassword)}
                />
            }
            />
            <Input
            placeholder="Repetir contraseña"
            containerStyle={styles.inputForm} 
            onChange={e=>onChange(e,"repeatPassword")}
            password={true}
            secureTextEntry={!showRepeatPassword}
            rightIcon={
                <Icon iconStyle={styles.iconRight}
                    type="material-community"
                    name={showRepeatPassword?"eye-off-outline":"eye-outline"}
                    onPress={()=>setShowRepeatPassword(!showRepeatPassword)}
                />
            }
            />
            <Button
            title="Unirse"
            containerStyle={styles.boton}
            buttonStyle={styles.btnRegister}
            onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Creando cuenta..."/>
        </View>
    )
}

function defaultFormValue(){
    return {
        email:"",
        password:"",
        repeatPassword:""
    }
}


const styles =StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
    },
    inputForm:{
        width:"100%",
        marginTop:20,
    },
    boton:{
        marginTop:20,
        width:"95%"
    },
    btnRegister:{
        backgroundColor:"#00a680",
    },
    iconRight:{
        color:"#c1c1c1"
        
    }
}
)