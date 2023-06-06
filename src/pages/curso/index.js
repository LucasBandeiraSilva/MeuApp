import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
export default function Resumo({ route, navigation }) {
  const { desc, professor } = route.params;

  const HandleVideo = () => {
    if (desc.includes("Java basico")) {
      navigation.navigate("videoScreen")
    }
    else if(desc.includes("Python Basico")){
      navigation.navigate("videoPython")
    }
    else if(desc.includes("FrontEnd Basico")){
      navigation.navigate("videoFront")
    }
    else if(desc.includes("MySql Basico")){
      navigation.navigate("videoSql")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Descrição do Curso: {desc}</Text>
      <Text style={styles.text}>Professor: {professor}</Text>
      <View style={styles.pressableContainer}>
        <Pressable onPress={HandleVideo} style={styles.pressable}>
          <Text>Assistir o vídeo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  pressableContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pressable: {
    backgroundColor: "lightblue",
    padding: 10,
  },
});
