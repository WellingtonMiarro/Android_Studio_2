import React from 'react';
import {View, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; //pacote de icones 


//Função Principal 
export default function App(){
  return(
  <View style = {estilo.container}>
        <View style = {estilo.serchBox}>
            <Icon style={{ marginEnd: 8 }} name= "menu" size= {25} color="#5f6267" />
                <TextInput style={{width:"100%" }} placeholder="Pesquisar E-mail"/> 
                    <Image style={{width: 30, height: 30, borderRadius: 25, marginEnd: 10}}source={require("../../assets/icons.png")}/>
        </View>
    </View>
  );
}

// Estilização da tela 
const estilo = StyleSheet.create({

serchBox: {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  paddingStart: 10,
  padding: 8,
  borderColor: "#c1c5c9",
  borderWidth: 1,
  borderRadius:8,
  shadowColor: "#000",
  shadowOffset: {
    width:1,
    height:0
  },
  shadowOpacity:0.25,
  shadowRadius:4,
  elevation: 0.5
},

});