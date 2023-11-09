import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import CardHeader from "../../components/CardHeader";
import CardIPreferences from "../../components/CardIPreferences";
import { Ionicons } from "@expo/vector-icons";

const PreferencesScreen = ({ navigation }) => {
  const handleManageInterests = () => {
  
  };

  return (
    <View style={styles.container}>
      <CardHeader />
      <View style={{paddingHorizontal: 16}}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("Gerir Interesses")}
        >
          <Text style={styles.label}>Gerir Interesses</Text>
          <Ionicons name="settings" size={20} color="white" />
        </TouchableOpacity>
        <CardIPreferences />
        <CardIPreferences />
        <CardIPreferences />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4B3EFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
    color: "white",
    letterSpacing: 0.9,
    paddingLeft: 10,
  },
});

export default PreferencesScreen;
