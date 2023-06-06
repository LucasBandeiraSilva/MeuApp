import React from "react";
import { View, StyleSheet, Linking, Button, Image } from "react-native";

export default function videoFront() {
  const handleOpenURL = () => {
    const url = "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n";
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../img/frontEnd.jpg')}
      />
      <View style={styles.buttonContainer}>
        <Button title="Abrir Video" onPress={handleOpenURL} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 50,
    width: 170,
    height: 170,
    
    marginTop:10,
  },
  buttonContainer: {
    marginTop:10
  },
});
