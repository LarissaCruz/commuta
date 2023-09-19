import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

function Input({ placeholderName, iconRight, iconLeft, stylesInput }) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <TextInput
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      theme={{
        colors: {
          outline: "#808080",
          primary: isFocused ? "#4B3EFF" : "#808080", // Cor da borda quando focado e não focado
          underlineColor: "transparent", // Remove a linha de baixo
        },
        fonts: {
          regular: {
            fontFamily: "MontserratRegular",
          },
        },
        roundness: 10,
      }}
      placeholderTextColor="#808080"
      style={[
        styles.input,
        stylesInput && stylesInput, // Adiciona os estilos extras (se existirem)
      ]}
      mode="outlined"
      placeholder={placeholderName}
      right={iconRight}
      left={iconLeft}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
  },
  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 16,
  },
});

export default Input;
