import { createStackNavigator } from "@react-navigation/stack";
import Login from "../page/Login/index";
import Etapa1 from "../page/Cadastro/Etapa1";
import Etapa2 from "../page/Cadastro/Etapa2";
import Etapa3 from "../page/Cadastro/Etapa3";
import Etapa4 from "../page/Cadastro/Etapa4";
import BottomTabs from "./BottomTabs";
import ConfirmEmailScreen from "../page/Cadastro/ConfirmEmailScreen";
const Stack = createStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
