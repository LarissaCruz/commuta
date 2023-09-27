import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleEmailFocus = () => setIsEmailFocused(true);
  const handleEmailBlur = () => setIsEmailFocused(false);
  const handlePasswordFocus = () => setIsPasswordFocused(true);
  const handlePasswordBlur = () => setIsPasswordFocused(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.title}>Boas Vindas!</Text>
      <Text style={styles.description}>
        Com o Commuta fazer permuta nunca foi tão fácil!
      </Text>
      <TextInput
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
        theme={{
          colors: {
            outline: "#808080",
            primary: isEmailFocused ? "#4B3EFF" : "#808080",
            underlineColor: "transparent",
          },
          roundness: 10,
        }}
        placeholderTextColor="#808080"
        style={styles.input}
        mode="outlined"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon icon="email" color={"#333"} />}
      />
      <TextInput
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
        theme={{
          colors: {
            outline: "#808080",
            primary: isPasswordFocused ? "#4B3EFF" : "#808080",
            underlineColor: "transparent",
          },
          roundness: 10,
        }}
        placeholderTextColor="#808080"
        style={styles.input}
        mode="outlined"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        right={<TextInput.Icon icon="eye" color={"#4B3EFF"} />}
        left={<TextInput.Icon icon="lock" color={"#333"} />}
        secureTextEntry
      />
      <Text style={[styles.description, styles.link]}>Esqueci minha senha</Text>
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.buttonText]}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>ou</Text>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
