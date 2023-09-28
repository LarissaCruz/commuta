import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";
import CardNovidades from "../../components/CardNovidades";
import CardContatos from "../../components/CardContatos";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <CardHeader></CardHeader>
      <View style={{ paddingHorizontal: 16 }}>
        <CardNovidades navigation={navigation} />
        <CardNovidades />
        <CardNovidades />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
});

export default Home;
