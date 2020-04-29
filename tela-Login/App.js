import *as React from 'react';
import {useState, useEffect}from 'react'; //{useState, useEffect}
import { View, 
  StyleSheet, 
  Image, 
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard
  } from 'react-native';


export default function App() {
  const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130, y:155}));

   useEffect(()=>{
     KeyboardDidShowListener = Keyboard.addListener('KeyboardDidShow',KeyboardDidShow);
     KeyboardDidHideListener = Keyboard.addListener('KeyboardDidHide',KeyboardDidHide)


     Animated.parallel([
      Animated.spring(offset.y, {
        toValue:0,
        speed:4,
        bounciness:20 //efeito estilingue
      }),
      Animated.timing(opacity, {
        toValue:1,
        duration: 200,
      })
     ]).start();
     

   }, []);

   function KeyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue:55,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue:65,
        duration: 100,
      })
     ]).start();
   }
   function KeyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue:130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue:155,
        duration: 100,
      })
     ]).start();
   }
   
  return (

    <KeyboardAvoidingView style={style.corpo}>
      <View style={style.logo}>
         <Animated.Image 
         style={{width: logo.x, height: logo.y}} 
         source={require("./assets/logo.png")}/>
      </View>


      <Animated.View 
        style={
          [
            style.container, 
            {
              opacity: opacity,
              transform:[
                {translateY: offset.y}
              ]
            }
          ]
          }> 
        <TextInput
          style={style.input} 
          placeholder="E-mail"
          outoCorrect={false}
          onChangeText={()=> {}}
         
        />

         <TextInput 
          style={style.input} 
          placeholder="Senha"
          outoCorrect={false}
        />

        <TouchableOpacity style={style.btnSubmint}>
          <Text style={style.submintText}>Acessar</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister}>
          <Text style={style.registerText}>Criar conta</Text> 
        </TouchableOpacity>
      
      </Animated.View>
     </KeyboardAvoidingView>
        

  );
}

const style = StyleSheet.create({
corpo:{
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#191919"
},
logo:{
  flex: 1,
  justifyContent: "center",
  marginTop: 30
},
container:{
   flex: 1,
  alignItems: "center",
  justifyContent: "center",
  width:"90%",
  paddingBottom: 50,
  marginTop: 20
},
input:{
 backgroundColor:"#fff",
 width:"90%",
 marginBottom: 15,
 color:"#222",
 fontSize: 17,
 borderRadius: 7,
 padding:10,
},
btnSubmint:{
  backgroundColor:"#35AAFF",
  width:"90%",
  height: 45,
  alignItems:"center",
  justifyContent: "center",
  borderRadius: 7,
},
submintText:{
 color:"#fff",
 fontSize: 18,
},
btnRegister:{
 marginTop: 10
},
registerText:{
  color:"#fff"
}

})
