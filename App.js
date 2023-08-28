import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./router/BottomTabs";
export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratBold: require("./assets/fontes/Montserrat-Bold.ttf"),
    MontserratMedium: require("./assets/fontes/Montserrat-Medium.ttf"),
    MontserratRegular: require("./assets/fontes/Montserrat-Regular.ttf"),
  });

  if (!!fontsLoaded) {
    return (
      <NavigationContainer>
        <AppTabs />
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
