import React from "react";
import { StyleSheet,View,ScrollView,Text,Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest(){
return(
    <ScrollView centerContent={true} style={styles.viewBody}>
        <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
        />
        <Text style={styles.text}>Consulta tu perfil de 5 Tenedores</Text>
        <Text style={styles.description}>¿Cómo descrivirías tu mejor restaurante? Busca y visualiza los mejores 
        restaurantes de una forma sencilla, vota cúal te ha gustado más y comenta cómo ha sido tu experiencia.</Text>
        <View style={styles.view}>
            <Button
            buttonStyle={styles.button}
            containerStyle={styles.container}
            title="Ver tu perfil"
            onPress={()=>console.log('Click!')}
            />

        </View>
    </ScrollView>
)
}

const styles=StyleSheet.create({
    viewBody:{
        marginLeft:30,
        marginRight:30,
    },
    image:{
        height:300,
        width:"100%",
        marginBottom:40,
    },
    text:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center"
    },
    description:{
        textAlign:"center",
        marginBottom:20
    },
    button:{
        backgroundColor:"#00a680"
    },
    container:{
        width:"70%"
    },
    view:{
        flex:1,
        alignItems:"center"
    }
})