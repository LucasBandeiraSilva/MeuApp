import React from "react";
import { View, StyleSheet, Linking, Button, Image } from "react-native";

export default function VideoScreen() {
  const handleOpenURL = () => {
    const url = "https://www.youtube.com/watch?v=X8AnVQ-GqLU&t=10s";
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../img/javaWall.jpeg')}
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
