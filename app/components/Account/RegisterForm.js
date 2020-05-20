import React, {useState} from "react"
import{ StyleSheet,View} from "react-native";
import {Input,Icon,Button} from "react-native-elements";


export default function RegisterForm(){
    const [showPassword,setShowPassword]=useState(false);
    const [showRepeatPassword,setShowRepeatPassword]=useState(false);
    const [formData,setFormData]=useState(defaultFormValue());

    const onSubmit=()=>{
        console.log(formData);
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