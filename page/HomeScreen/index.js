import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";
import CardNews from "../../components/CardNews";
import PlanoAnualModal from "../../components/PlanoAnualModal";


function HomeScreen({ navigation }) {
  const [visible, setVisible] = React.useState(true)
  return (
    <View style={styles.container}>
      <PlanoAnualModal visible={visible} setVisible={setVisible}></PlanoAnualModal>
      <CardHeader></CardHeader>
      <View style={{ paddingHorizontal: 16 }}>
        <CardNews navigation={navigation} />
        <CardNews />
        <CardNews />
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

export default HomeScreen;
