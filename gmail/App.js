import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; //pacote de icones 

//IMPORTE DE COMPONENTES 
import Hulk from './src/components/ContatoHulk';
import Capitao from './src/components/ContatoCapitao';
import HomemDeFerro from './src/components/ContatoTonny';
import ViuvaNegra from './src/components/ContatoViuva';
import Thor from './src/components/ContatoThor';
import PesquisarEmail from './src/components/SerchBox';

//Função Principal 
export default function App(){
  return(
  <View style = {estilo.container}>
        
    {/* Caixa de Pesquisa de E-mails */}
    <PesquisarEmail/>

    {/* Caixa de entrada */}
     <Text style={estilo.texto}> CAIXA DE ENTRADA</Text>


    {/*  Caixa de e-mails recebidos
      Os contatos de E-mais foram colocados separadamente no Componentes
    */}
    <Hulk/>
    <Capitao/>
    <HomemDeFerro/>
    <ViuvaNegra/>
    <Thor/>

        {/* BOTÃO NOVO */}
        <TouchableOpacity style = {estilo.buttonNew}> 
           <Image style={{width: 30, height: 30}} source={require("./assets/plusgmail.png")}/>
        </TouchableOpacity>

    </View>
  );
}

// Estilização da tela 
const estilo = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  padding: 8,
  paddingTop: 44
},

texto:{
marginTop: 10,
marginBottom:10,
fontSize:10,
fontWeight: "bold",
color:"#5f6267",
letterSpacing: 2, // espaçamento entre as letras
},
buttonNew:{
  alignItems:"center",
  justifyContent:"center",
  width:40,
  height:40,
  position:"absolute",
  bottom:15,
  right:15,
  backgroundColor:"#fff",
  borderColor:"rgba(0,0,0,0.2)",
  borderWidth: 1,
  borderRadius: 100,
  shadowColor:"#000",
  textShadowOffset:{
    width:1,
    height:0
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 0.5
 }
});