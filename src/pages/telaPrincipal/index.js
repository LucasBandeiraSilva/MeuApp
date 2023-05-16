import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";

const lista = [
  {
    id: "01",
    desc: ["Java basico"],
    source: require("../img/javaWall.jpeg"),
    professor:["Steve"]
  },
  {
    id: "02",
    desc: ["Python Basico"],
    source: require("../img/pythonWallpapper.png"),
    professor:["José"]
  },
  {
    id: "03",
    desc: ["FrontEnd Basico"],
    source: require("../img/frontEnd.jpg"),
    professor:["Manoel gomes"]
  },
  {
    id:"04",
    desc:["MySql Basico"],
    source:require("../img/MySql.png"),
    professor:["Marcelo Rossi"]
  }
];

export default function TelaPrincipal({ route, navigation }) {
  const { nome } = route.params;

  const renderItem = ({ item }) => (
    <Pressable style={styles.itemContainer} onPress={() => renderNewPage(item.desc,item.professor)}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.texto}>{item.desc}</Text>
    </Pressable>
  );
  
  const renderNewPage = (desc,professor) => {
    navigation.navigate("descCurso", { desc: desc, professor:professor});
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}> olá {nome}!</Text>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 10,
    alignItems: "center",
    marginTop:10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
  },

  image: {
    marginTop: 40,
    width: 170,
    height: 170,
    alignSelf: "center",
    marginTop:10,
  },
});
