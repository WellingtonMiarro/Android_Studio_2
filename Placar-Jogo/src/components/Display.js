import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//função principal
export default function Display(props) {
  return (
    <View style={styles.container}> 
      <Text style={styles.label}>{props.value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
container:{
    borderRadius:4,
},
label:{
    width: 90,
    height: 80,
    fontSize:26,
    color: "#000",
    fontWeight: "bold",
    borderRadius: 50,
    textAlign:'center',
    padding: 20,  
    }
});
