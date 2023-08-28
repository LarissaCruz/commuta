import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { List } from "react-native-paper";

function Login() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput mode="outlined" placeholder="Type something" />
      <List.AccordionGroup>
        <List.Accordion
          title="Accordion 1"
          id="1"
          style={{
            borderColor: "black",
            borderWidth: 0.5,

            paddingVertical: 0,
            borderTopRadius: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1,
              },
              elevation: 5,
            }}
          >
            <List.Item title="Item 1" />
            <List.Item title="Item 1" />
            <List.Item title="Item 1" />
            <List.Item title="Item 1" />
          </View>
        </List.Accordion>
        <TextInput mode="outlined" placeholder="Type something" />
        <List.Accordion title="Accordion 2" id="2">
          <List.Item title="Item 2" />
        </List.Accordion>
        <View>
          <Text>
            List.Accordion can be wrapped because implementation uses
            React.Context.
          </Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Login;
