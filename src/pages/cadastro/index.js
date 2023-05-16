import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function TelaLogin({ navigation }) {
  const image = {
    uri: "https://i.pinimg.com/originals/2f/bc/84/2fbc844a5b4a294d164607c2ec4e15da.jpg",
  };
  const [nome, setNome] = useState("");

  const handleEntrar = () => {
    navigation.navigate("TelaPrincipal", { nome });
  };

  const handleLogin = () => {
    navigation.navigate("TelaLogin",{nome});
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.texto}>Cadastro De Usuario</Text>
        <TextInput
          placeholder="Informe o seu nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholderTextColor={"#fff"}
        />
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          keyboardType="email-adress"
          placeholderTextColor={"#fff"}
        />
        <TextInput
          placeholder="informe a sua idade"
          placeholderTextColor={"#fff"}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="informe sua senha"
          placeholderTextColor={"#fff"}
          maxLength={10}
          keyboardType="password"
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEntrar}>
            <Text style={styles.buttonText}>Cadastar e entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Faça seu login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    margin: 10,
    borderRadius: 10,
    width: 90,

    borderWidth: 1,
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
