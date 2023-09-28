import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

function CardHeader() {
  return (
    <View style={styles.card}>
      <View style={{ alignItems: "flex-end", paddingEnd: 10 }}>
        <Fontisto name="close-a" size={7} color="black" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/ads.png")}
          style={{ width: 111, height: 34 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 5,
    paddingTop: 5,
    paddingBottom: 12,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 3,
    marginBottom: 16,
  },
});

export default CardHeader;
