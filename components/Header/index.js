import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";

function Header({ name, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Perfil");
        }}
        style={{ borderWidth: 2, borderColor: "#4B3EFF", borderRadius: 50 }}
      >
        <Avatar.Image size={40} source={require("../../assets/avatar.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FCFCFC",
  },
  titulo: {
    width: "88.5%",
    fontFamily: "MontserratMedium",
    fontSize: 20,
    color: "#000000",
    lineHeight: 24,
    padding: 0,
  },
});

export default Header;
