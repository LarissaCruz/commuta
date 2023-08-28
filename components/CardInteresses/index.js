import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function CardInteresses() {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.titulo}>Professor (Matemática)</Text>
        <FontAwesome5 name="trash" size={18} color="black" />
      </View>
      <Text style={styles.label}>
        Instituto Federal de Educação Ciência e Tecnologia
      </Text>
      <View style={styles.containerRow}>
        <Text style={styles.smalLabel}>Rio de Janeiro (RJ)</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="loop" size={16} color="#8178FF" />
          <Text style={styles.smalLabel}>Eunápolis (BA)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 2,
    padding: 16,
    paddingLeft: 8,
    marginBottom: 16,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 24,
    padding: 0,
    marginBottom: 8,
  },
  containerRow: {
    flexDirection: "row",
    gap: 8.5,
  },
  label: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  smalLabel: {
    fontSize: 12,
    fontFamily: "MontserratRegular",
    color: "#333333",
  },
});

export default CardInteresses;
