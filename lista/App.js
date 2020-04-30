import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import {
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage
} from "react-native";
//AsyncStorage permite ler dados da memoria do celular
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function addTask() {
    if (newTask == ''){ // nao deixa adicionar tarefa VAZIA
      return;
    }
    const search = task.filter(task => task === newTask); // Aqui esta verificando se existe outra tarefa igual

    if (search.length !== 0) { // se for diferente de 0 é pq tem uma palavra igual, se for = 0, ele nao encontrou palavra repetida
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }

    setTask([...task, newTask]); // apos voce adicionar a nova tarefa 
    setNewTask(""); // ... retorne ao estado inicial (vazio)

   
    Keyboard.dismiss(); // apos digitar algo no imput o teclado volta ao estado inicial, tornando possivel vizualizar a lista
  }

  async function removeTask(item) {// remover item
    Alert.alert( 
      "Deletar",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {// carrega os dados quando o usuario abrir o app 
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => { // salva os dados na memoria do celular, e toda vez é atualizada
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"} // no android ja tem esse padding e no IOS Não
      >
        <View style={styles.container}>
          <View style={styles.Body}>
            <FlatList
              data={task} // de onde vem os dados 
              keyExtractor={item => item.toString()} // serve para identificar Qual item é 
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => ( // renderiza o item na tela 
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#f64c75"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor="#999"
              autoCorrect={true}
              value={newTask} // possui o mesmo valor que foi digitado 
              placeholder="Adicione uma tarefa"
              maxLength={50} //tamanho maximo que pode ser excrito 
              onChangeText={text => setNewTask(text)} // passando o texto que foi digitado, para função setNewTask
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name="ios-add" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#FFF"
  },
  Body: {
    flex: 1
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center"
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee"
  }
});
