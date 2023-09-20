import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";

function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{name}</Text>
      <View
        style={{ borderWidth: 2, borderColor: "#4B3EFF", borderRadius: 50 }}
      >
        <Avatar.Image size={40} source={require("../../assets/avatar.png")} />
      </View>
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
