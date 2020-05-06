import React, {useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//Importar componentes
import BotaoAdd1 from './src/components/BotaoAdd1';
import BotaoAdd2 from './src/components/BotaoAdd2';
import BotaoAdd3 from './src/components/BotaoAdd3';
import Display from './src/components/Display';

//Função Principal
export default function App() {

  //Criar o estado para persistencia dos dados 

  const [valor, setValor] = useState(0)
  const [valor2, setValor2] = useState(0)
  return (
    <View style={styles.container}>
    
      <View style={styles.display}>
          <Image 
          style={{width: 60, height: 60, borderRadius: 25, marginLeft:20}}
          source={require("./assets/tor.png")}/>
          
          <Display value={valor}/>

          <Text style={styles.vs}>Vs</Text>

          <Display value={valor2}/>
          <Image 
          style={{width: 60, height: 60, borderRadius: 25, marginRight:20,}}
          source={require("./assets/lakers.jpg")}/>
      </View>
      
      <View style={styles.display2}>
          <Text style={styles.txt}>Toronto </Text>
          <Text style={{fontSize: 18, fontWeight:'bold', marginRight:50}}>Raptors</Text>

          <Text style={styles.txt}>Los Angeles </Text>
          <Text style={{fontSize: 18, fontWeight:'bold',}}>Lokers</Text>
      </View>
         

      <View style={styles.display3}>
          <Text style={styles.vs2}>Modificar o Placar</Text>
      </View>

      <View style={styles.display4}>
          <Text style={styles.texto}>Acrescentar</Text>
          <Text style={styles.texto}>Acrescentar</Text>
      </View>


      <View style={styles.container2}>
        <BotaoAdd1 text='+1' onPress={ () => setValor(valor + 1) } />
        <BotaoAdd1 text='+1' onPress={ () => setValor2(valor2 + 1) }/>
      </View>

      <View style={styles.container2}>
        <BotaoAdd2 text=' +2' onPress={ () => setValor(valor + 2) }/>
        <BotaoAdd2 text='+2' onPress={ () => setValor2(valor2 + 2) }/>
      </View>

      <View style={styles.container2}>
        <BotaoAdd3 text='+3' onPress={ () => setValor(valor + 3) }/>
        <BotaoAdd3 text=' +3 ' onPress={ () => setValor2(valor2 + 3) }/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    paddingTop: 16,
  },
  display:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    
  },
  display2:{
    flexDirection: 'row',
  },
  display3:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  display4:{
    flexDirection: 'row',
  },
  vs:{
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  vs2:{
    marginTop: 30,
    fontSize: 26,
  },
  txt:{
    fontSize:18,
    marginLeft:8
  },
  texto:{
    fontSize:18,
    marginLeft:40,
    marginRight:40,
    marginTop: 40
  }
});
