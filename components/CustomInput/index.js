import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";

function CustomInput({
  placeholderName,
  onChangeText,
  iconRight,
  iconLeft,
  stylesInput,
  value,
  label,
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, stylesInput]}
        onChangeText={onChangeText}
        value={value}
        placeholder="useless placeholder"
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#9B9B9B",
  },
  label: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 20,
    padding: 0,
    marginBottom: 17,
  },
});

export default CustomInput;
