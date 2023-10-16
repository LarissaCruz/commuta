import { useFonts } from "expo-font";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppTabs from "./router/BottomTabs";
import AuthRouter from "./router/AuthRouter";
import { FormProvider } from "./context/FormContext";
export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratBold: require("./assets/fontes/Montserrat-Bold.ttf"),
    MontserratMedium: require("./assets/fontes/Montserrat-Medium.ttf"),
    MontserratRegular: require("./assets/fontes/Montserrat-Regular.ttf"),
  });

  if (!!fontsLoaded) {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#ffff" // Cor de fundo da barra de status
          barStyle="light-content" // Estilo do texto (light ou dark)
          translucent={true} // Tornar a barra de status transparente
        />
        <FormProvider>
          <AuthRouter />
        </FormProvider>
      </NavigationContainer>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
