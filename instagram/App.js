import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    //View do TOPO
    <View style={styles.container}>
              <View style={styles.topo}>
                <View >
                    <Image
                      style={styles.topoImg}
                      source={require('../instagram/Img/camera.png')}/>
                </View>
                <View>
                  <Text  style={{fontSize: 20, alignItems:"center", marginLeft: 88, fontFamily:'sans-serif-thin' }}> Instagram</Text>
                </View>
                <View style={{marginLeft:30}}>
                    <Image
                      style={styles.topoImg2}
                      source={require('../instagram/Img/ig.png')}/>
                </View>
                <View>
                     <Image
                      style={styles.topoImg2}
                      source={require('../instagram/Img/send.png')}/>
                </View>
              </View>



              <View style={styles.meio}>
                <View>
                   <Image
                      style={{width: 50, height: 50, borderRadius:50, margin:8}}
                      source={require('../instagram/Img/darthvader.jpg')}/>
                </View>

                <View>
                    <Text style={styles.perfilText}>
                        Nome da pessoa
                    </Text>
                </View>

                <View>
                    <Image
                      style={{width: 20, height: 20, margin:24, marginLeft:110}}
                      source={require('../instagram/Img/pontos.png')}/>
                </View>
              </View>

              <View style={styles.meio2}>
                <View style={{width: 100, height: 200}}>
                    <Image
                      style={{width: 350, height: 350, borderRadius:4, margin:8, marginLeft:5}}
                      source={require('../instagram/Img/deathstar.jpg')}/>
                </View>  
              </View>

              <View style={styles.meio3}>
                  <View>
                     <Image
                     style={styles.interacao}
                      source={require('../instagram/Img/heart.png')}/>
                  </View>

                <View>
                    <Image
                      style={styles.interacao}
                      source={require('../instagram/Img/chat.png')}/>
                </View>

                <View>
                     <Image
                      style={styles.interacao}
                      source={require('../instagram/Img/send.png')}/>
                  
                </View>  

                 <View>
                     <Image
                      style={{width: 30, height: 30, marginLeft: 218,margin:2}}
                      source={require('../instagram/Img/tag.png')}/>
                </View> 
              </View> 
              

               <View style={styles.final}>
                  <Text style={{fontSize: 16, fontFamily:'sans-serif-thin',fontWeight: 'bold' }}>500,022 curtidas</Text>
                  <Text style={{fontSize: 14, fontFamily:'sans-serif-thin',fontWeight: 'bold' }}>
                    NOMEDAPESSOA Esse trabalho me
                   deu muita raiva para fazer, e esse foi o maximo que consegui.
                  </Text>
                </View>            
    </View>  
  );
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  topo: {
      flex: .1,
      flexDirection:'row',
      paddingTop:40
  },
  meio: {
      flex: .1,
      flexDirection:'row',
  },
perfilText:{
  fontSize:16,
  marginLeft: 6,
  fontFamily:'sans-serif-thin',
  margin:20,
  fontWeight: 'bold'
},


  meio2: {
    flex: .4,
    flexDirection:'row',
    paddingBottom:150
},
topoImg:{
  width: 30, 
  height: 30,
  marginLeft:10  
  
},
topoImg2:{
  width: 30, 
  height: 30,
  marginLeft:18 
},
meio3: {
    flex: .1,
    flexDirection:'row',
    marginLeft:6
},
interacao:{
  width: 30, 
  height: 30,
  margin:2
},

final:{
  flex: .1,
  flexDirection:'column',
  marginLeft:8
}
,

final2:{
  flex: .1,
  flexDirection:'row',
  marginLeft:8,
}

  
});

