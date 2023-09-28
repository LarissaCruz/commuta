import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";

function Configuracao({ navigation }) {
  return (
    <View style={styles.container}>
      <CardHeader />
      <Text style={[styles.titulo, { marginTop: 10 }]}>
        Amanda Oliveira Souza
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <View style={[styles.chip]} key={index}>
          <Text style={styles.smalLabel}>Acre (AC)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 20,
    padding: 0,
    marginBottom: 17,
  },
  chip: {
    paddingLeft: 16,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EDECFF",
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  smalLabel: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
  },
});

export default Configuracao;
