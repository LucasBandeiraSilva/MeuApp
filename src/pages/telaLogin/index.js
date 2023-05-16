import React,{useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  
} from "react-native";

export default function TelaLogin({ navigation }) {
  const image = {
    uri: "https://i.pinimg.com/originals/2f/bc/84/2fbc844a5b4a294d164607c2ec4e15da.jpg",
  };
  const [nome, setNome] = useState("");

  const handleEntrar = () => {
    navigation.navigate("TelaPrincipal", { nome });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.texto}>Login</Text>
        <TextInput
          placeholder="Informe o seu nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholderTextColor={"#fff"}
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
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
    width: 150,
    borderWidth: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
