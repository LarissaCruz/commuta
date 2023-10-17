import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../page/LoginScreen/index";
import Etapa1 from "../page/RegistrationScreen/Etapa1";
import Etapa2 from "../page/RegistrationScreen/Etapa2";
import Etapa3 from "../page/RegistrationScreen/Etapa3";
import Etapa4 from "../page/RegistrationScreen/Etapa4";
import BottomTabs from "./BottomTabs";
import ConfirmEmailScreen from "../page/RegistrationScreen/ConfirmEmailScreen";
import DetailsScreen from "../page/DetailsScreen";
import ProfileScreen from "../page/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import SettingsScreen from "../page/SettingsScreen/index.js";

const Stack = createStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator s screenOptions={{
      headerStyle: {
        backgroundColor: '#fcfcfc', // Defina a cor desejada aqui
      },
    }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Etapa1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Etapa2"
        component={Etapa2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Etapa3"
        component={Etapa3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Etapa4"
        component={Etapa4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmEmail"
        component={ConfirmEmailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalhes do Interesse"
        component={DetailsScreen}
        options={{
          headerBackImage: () => (
            <View style={{ paddingLeft: 20 }}>
              <MaterialIcons name="arrow-back-ios" size={16} color="#4B3EFF" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Gerir Interesses"
        component={SettingsScreen}
        options={{
          headerBackImage: () => (
            <View style={{ paddingLeft: 20 }}>
              <MaterialIcons name="arrow-back-ios" size={16} color="#4B3EFF" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Detalhes do Contato"
        component={DetailsScreen}
        options={{
          headerBackImage: () => (
            <View style={{ paddingLeft: 20 }}>
              <MaterialIcons name="arrow-back-ios" size={16} color="#4B3EFF" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
