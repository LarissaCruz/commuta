import React from "react";
import { View, StyleSheet } from "react-native";
import CardHeader from "../../components/CardHeader";
import CardContacts from "../../components/CardContacts";

function ContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CardHeader />
      <View style={{paddingHorizontal: 16}}>
        <CardContacts navigation={navigation} />
        <CardContacts />
        <CardContacts />
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

export default ContactsScreen;
