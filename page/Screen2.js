import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Screen2() {
  return (
    <View style={styles.container}>
      <Text>Screen 2 Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen2;
