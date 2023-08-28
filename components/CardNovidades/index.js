import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function CardNovidades() {
  return (
    <View style={styles.card}>
      <View style={{ width: "90%" }}>
        <Text style={styles.titulo}>Professor (Matemática)</Text>
        <View style={styles.containerRow}>
          <Entypo name="star" size={16} color="#8178FF" />
          <Text style={styles.label}>Deseja: Eunápolis (BA)</Text>
        </View>
        <View style={styles.containerRow}>
          <Entypo name="location-pin" size={16} color="#333333" />
          <Text style={styles.label}>Oferece: Ilhéus (BA)</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#4B3EFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginTop: 2,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 14,
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
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 24,
    padding: 0,
    marginBottom: 17,
  },
  containerRow: {
    flexDirection: "row",
    gap: 8.5,
  },
  label: {
    fontSize: 14,
    fontFamily: "MontserratRegular",
    color: "#333333",
    paddingBottom: 8,
  },
});

export default CardNovidades;
