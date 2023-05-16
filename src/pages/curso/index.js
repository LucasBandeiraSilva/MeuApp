import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Resumo({ route, navigation}) {
  const { desc, professor } = route.params;

  const HandleVideo = () => {
    if (desc.includes("Java basico")) {
      navigation.navigate("videoScreen")
    }
    else if(desc.includes("Python Basico")){
      navigation.navigate()
    }
    else if(desc.includes("FrontEnd Basico")){

    }
    else if(desc.includes("MySql Basico")){
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Descrição do Curso: {desc}</Text>
      <Text style={styles.text}>Professor: {professor}</Text>
      <Pressable onPress={HandleVideo}>
        <Text>Assistir o video</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //justifyContent: "center",
    //alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});
