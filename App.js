import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import telaLogin from "./src/pages/telaLogin/";
import telaPrincipal from "./src/pages/telaPrincipal/";
import cadastro from "./src/pages/cadastro";
import curso from "./src/pages/curso";
import videoScreen from "./src/pages/video";
import videoPython from "./src/pages/video/index2";
import videoFront from "./src/pages/video/index3"
import videoSql from "./src/pages/video/index4"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="cadastro">
        <Stack.Screen name="TelaLogin" component={telaLogin} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="TelaPrincipal" component={telaPrincipal} />
        <Stack.Screen
          name="descCurso"
          component={curso}
          options={{
            headerLeft: () => null,
            title: "Descrição do curso escolhido",
          }}
        />
        <Stack.Screen
          name="videoScreen"
          component={videoScreen}
          options={{
            headerLeft: () => null,
            title: "Video",
          }}
        />
        <Stack.Screen
          name="videoPython"
          component={videoPython}
          options={{
            headerLeft: () => null,
            title: "video",
          }}
        />
        <Stack.Screen
          name="videoFront"
          component={videoFront}
          options={{
            headerLeft: () => null,
            title: "video",
          }}
        />
        <Stack.Screen
          name="videoSql"
          component={videoSql}
          options={{
            headerLeft: () => null,
            title: "video",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
});
