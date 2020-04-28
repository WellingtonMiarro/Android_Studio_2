import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; //pacote de icones 

//Função Principal 
export default function App(){
  return(
    <View style = {estilo.container}>
        <View style = {estilo.email}> 
            <Image style={{width: 30, height: 30, borderRadius: 25, marginEnd: 10}}
              source={require("../../assets/thor.png")}/>

                <View style = {estilo.emailAbstract}>

                  <View style = {estilo.emailFrom}>
                    <Image style={{width: 16, height: 16, marginEnd: 10}}
                    source={require("../../assets/important.png")}/>
                    <Text style = {estilo.labelEmailFrom}>Thor</Text>
                    <Text style = {estilo.labelEmailData}> 11 de abr </Text>

                  </View>

                <View style = {estilo.emailSubject}>
                    <View style = {estilo.emailSubjectLeft}>

                      <Text style = {estilo.labelEmailSubjectMensag}>
                         Tragam-me o Thanos
                      </Text>

                      <Text style = {estilo.labelEmailSubjectMensag}>
                          EU SOU O THOR, DEUS DO TROVÃO!!!
                      </Text>   
                    </View>

                    <View style = {estilo.emailSubjectRight}> 
                      <Icon 
                        name= "star-border" 
                        size= {20} 
                        color="#c1c5c9" />
                   </View>
                </View>
            </View>
       </View>
       
    </View>
  );
}

// Estilização da tela 
const estilo = StyleSheet.create({
      email:{
        flexDirection: "row",
        marginBottom: 10,
      },
      emailAbstract:{
        flex:1,
        flexDirection: "column",
      },
      emailFrom:{
         flexDirection: "row",
         alignItems: "center",
      },
      labelEmailFrom:{
        width:"100%",
        fontSize:10,
        fontWeight: "bold",
        color:"#202125"
      },
      labelEmailData:{
         width: 90,
        fontSize:10,
        fontWeight: "bold",
        color:"#202125"
      },
      emailSubject:{
        flexDirection: "row",
        height:30
      },
      emailSubjectLeft:{
        width:"85%"
      },
      labelEmailSubjectMensag:{
      fontSize:10,
      fontWeight: "bold",
      color:"#202125"
      },
      emailSubjectRight:{
        width:30,
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop:10
      }
});