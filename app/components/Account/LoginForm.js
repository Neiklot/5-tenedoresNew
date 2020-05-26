import React,{useState} from "react";
import {StyleSheet,View} from "react-native";
import{ Input,Icon,Button} from "react-native-elements";
import {isEmpty} from "lodash";

export default function LoginForm(){
    const [hidePassword,setHidePassword]=useState(true);
    const [formData,setFormData]=useState(defaultFromValue());
    
    const onChange=(e,type)=>{
        setFormData({...formData,[type]:e.nativeEvent.text})
    }

    const onSubmit=()=>{
        console.log(formData)
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e,"email")}
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
                password={true}
                secureTextEntry={hidePassword}
                onChange={(e)=>onChange(e,"password")}
                rightIcon={
                    <Icon iconStyle={styles.iconRight}
                        type="material-community"
                        name={hidePassword?"eye-off-outline":"eye-outline"}
                        onPress={()=>setHidePassword(!hidePassword)}
                    />
                }
            />
            <Button
                title="Iniciar sesión"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFromValue(){
    return{
        email:"",
        password:""
    }
}

const styles=StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    inputForm:{
        width:"100%",
        marginTop:20,
    },
    btnContainerLogin:{
        marginTop:20,
        width:"95%"
    },
    btnLogin:{
        backgroundColor:"#00a680",
    }, 
    iconRight:{
        color:"#c1c1c1"
    }    
});