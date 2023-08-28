import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";
import CardNovidades from "../../components/CardNovidades";
import CardContatos from "../../components/CardContatos";

function Home() {
  return (
    <View style={styles.container}>
      <CardHeader></CardHeader>
      <CardNovidades />
      <CardNovidades />
      <CardNovidades />
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

export default Home;
