import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../page/HomeScreen/index";
import ContactsScreen from "../page/ContactsScreen/index";
import SearchScreen from "../page/SearchScreen/index";
import PreferencesScreen from "../page/PreferencesScreen/index";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: "transparent",
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarStyle: { height: 65 },
        tabBarActiveTintColor: "#1A1A1A",
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontFamily: "MontserratRegular",
          fontSize: 11,
        },
      }}
    >
      <Tab.Screen
        name="Novidades"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Header name="Novidades" navigation={navigation}></Header>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#8178FF" : "#EDECFF",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 25,
              }}
            >
              <Entypo
                name="home"
                size={20}
                color={focused ? "white" : "#8178FF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Contatos"
        component={ContactsScreen}
        options={{
          headerTitle: (props) => (
            <Header name="Contatos" navigation={navigation}></Header>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#8178FF" : "#EDECFF",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 25,
              }}
            >
              <MaterialIcons
                name="supervisor-account"
                size={24}
                color={focused ? "white" : "#8178FF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
        options={{
          headerTitle: (props) => (
            <Header name="Buscar" navigation={navigation}></Header>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#8178FF" : "#EDECFF",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 25,
              }}
            >
              <Ionicons
                name="search-sharp"
                size={24}
                color={focused ? "white" : "#8178FF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Interesses"
        component={PreferencesScreen}
        options={{
          headerTitle: (props) => (
            <Header name="Interesses" navigation={navigation}></Header>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#8178FF" : "#EDECFF",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 25,
              }}
            >
              <MaterialIcons
                name="loop"
                size={24}
                color={focused ? "white" : "#8178FF"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
