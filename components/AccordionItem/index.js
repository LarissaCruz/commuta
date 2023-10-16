import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";

const AccordionItem = ({ expanded, onPress, title, id, children, style }) => {
  return (
    <List.Accordion
      expanded={expanded}
      onPress={onPress}
      title={<Text style={{ color: "#808080" }}>{title}</Text>}
      id={id}
      style={{
        borderColor: "#808080",
        borderWidth: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 16,
        height: 48,
        color: "#808080",
        ...style 
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          borderRadius: 10,
          marginBottom: 16,
          borderTopRightRadius: 10,
          shadowOffset: {
            height: 1,
            width: 1,
          },
          elevation: 5,
        }}
      >
        {children}
      </View>
    </List.Accordion>
  );
};

export default AccordionItem;
