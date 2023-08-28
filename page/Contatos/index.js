import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";
import CardContatos from "../../components/CardContatos";

function Contatos() {
  return (
    <View style={styles.container}>
      <CardHeader></CardHeader>
      <CardContatos />
      <CardContatos />
      <CardContatos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
  },
});

export default Contatos;
