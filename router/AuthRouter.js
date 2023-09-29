import { createStackNavigator } from "@react-navigation/stack";
import Login from "../page/Login/index";
import Etapa1 from "../page/Cadastro/Etapa1";
import Etapa2 from "../page/Cadastro/Etapa2";
import Etapa3 from "../page/Cadastro/Etapa3";
import Etapa4 from "../page/Cadastro/Etapa4";
import BottomTabs from "./BottomTabs";
import ConfirmEmailScreen from "../page/Cadastro/ConfirmEmailScreen";
import Detalhes from "../page/Detalhes";
import Perfil from "../page/Perfil";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Configuracao from "../page/Configuracao/index.js";

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
        component={Login}
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
        component={Detalhes}
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
        component={Configuracao}
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
        component={Detalhes}
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
        component={Perfil}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
