import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar, Card } from "react-native-paper";
import { List } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function CardContacts({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detalhes do Contato");
      }}
      style={styles.card}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Image size={48} source={require("../../assets/avatar2.png")} />
      </View>
      <View style={{ width: "80%" }}>
        <Text style={styles.titulo}>Amanda Oliveira Souza</Text>
        <Text style={styles.label}>Professor (Matemática)</Text>
        <View style={styles.containerRow}>
          <Text style={styles.smalLabel}>Rio de Janeiro (RJ)</Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="loop" size={16} color="#8178FF" />
            <Text style={styles.smalLabel}>Eunápolis (BA)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 8,
    marginTop: 2,
    padding: 16,
    paddingLeft: 8,
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

export default CardContacts;
