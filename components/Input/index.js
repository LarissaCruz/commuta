import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Controller } from "react-hook-form";

function Input({
  placeholderName,
  iconRight,
  iconLeft,
  stylesInput,
  name, 
  control, 
  rules,
  secureTextEntry,
  keyboardType,
  onChangeText,
  valueText

}) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <Controller
    control={control}
    rules={rules}
    name={name}
    render={({
      field: { onChange, onBlur, value },
      fieldState: { error },
    }) => (
      <>
        <TextInput
          value={valueText ? valueText : value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          theme={{
            colors: {
              outline: "#808080",
              primary: isFocused ? "#4B3EFF" : "#808080", 
              underlineColor: "transparent", 
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
            stylesInput && stylesInput,
          ]}
          mode="outlined"
          placeholder={placeholderName}
          right={iconRight}
          left={iconLeft}
          onChangeText={ onChangeText ? onChangeText : onChange }
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </>
    )}
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
