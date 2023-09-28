import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import CardHeader from "../../components/CardHeader";
import CardInteresses from "../../components/CardInteresses";
import { Ionicons } from "@expo/vector-icons";

const Interesse = ({ navigation }) => {
  const handleManageInterests = () => {
    // Implemente a lógica para gerenciar interesses aqui
  };

  return (
    <View style={styles.container}>
      <CardHeader />
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate("Gerir Interesses")}
      >
        <Text style={styles.label}>Gerir Interesses</Text>
        <Ionicons name="settings" size={20} color="white" />
      </TouchableOpacity>
      <CardInteresses />
      <CardInteresses />
      <CardInteresses />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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

export default Interesse;
