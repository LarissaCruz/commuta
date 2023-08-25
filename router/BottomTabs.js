import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../page/Login";
import Screen2 from "../page/Screen2";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  );
}
