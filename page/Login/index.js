import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { List } from "react-native-paper";

function Login({ navigation }) {
  const [text, setText] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logo.png")}></Image>
      </View>
      <Text style={styles.titulo}>Boas Vindas!</Text>
      <Text style={styles.label}>
        Com o Commuta fazer permuta nunca foi tão fácil!
      </Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        theme={{
          colors: {
            outline: "#808080",
            primary: isFocused ? "#4B3EFF" : "#808080", // Cor da borda quando focado e não focado
            underlineColor: "transparent", // Remove a linha de baixo
          },

          roundness: 10,
        }}
        placeholderTextColor="#808080"
        style={styles.input}
        mode="outlined"
        placeholder="Email"
        left={<TextInput.Icon icon="email" color={"#333"} />}
      />

      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        theme={{
          colors: {
            outline: "#808080",
            primary: isFocused ? "#4B3EFF" : "#808080", // Cor da borda quando focado e não focado
            underlineColor: "transparent", // Remove a linha de baixo
          },

          roundness: 10,
        }}
        placeholderTextColor="#808080"
        style={styles.input}
        mode="outlined"
        placeholder="Senha"
        right={<TextInput.Icon icon="eye" color={"#4B3EFF"} />}
        left={<TextInput.Icon icon="lock" color={"#333"} />}
      />
      <Text style={[styles.label, styles.link]}>Esqueci minha senha</Text>
      <TouchableOpacity
        style={[styles.button, { marginTop: 5 }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.labelButton]}>Entrar</Text>
      </TouchableOpacity>
      <Text style={[styles.texto]}>ou</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "white" }]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
          Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  containerLogo: {
    flex: 1 / 1.1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 56,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    marginBottom: 10,
  },
  label: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    marginBottom: 28,
  },
  labelButton: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
    color: "white",
  },
  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 28,
  },
  link: {
    color: "#8178FF",
    textDecorationLine: "underline",
    textAlign: "right",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4B3EFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
  },
});

export default Login;
