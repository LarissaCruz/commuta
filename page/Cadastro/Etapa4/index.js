import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import Input from "../../../components/Input";
import { TextInput } from "react-native-paper";

function Etapa4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titulo}>Cadastro</Text>
      </View>
      <ProgressBar progress={1} color={"#4B3EFF"} />
      <View style={{ paddingTop: 16, gap: 16 }}>
        <Text style={[styles.titulo, { textAlign: "left" }]}>
          Dados de acesso
        </Text>
        <Text style={styles.label}>
          Estamos quase lá. Agora so falta os seus dados de acesso.
        </Text>
      </View>
      <Input placeholderName={"Email"}></Input>
      <Input
        placeholderName={"Senha"}
        iconRight={<TextInput.Icon icon="eye" color={"#4B3EFF"} />}
      ></Input>

      <Input
        placeholderName={"Repetir senha"}
        iconRight={<TextInput.Icon icon="eye" color={"#4B3EFF"} />}
      ></Input>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 15,
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 5,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white" }]}
            onPress={() => navigation.navigate("Etapa3")}
          >
            <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
              Anterior
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Etapa4")}
          >
            <Text style={[styles.labelButton]}>Concluir</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.smallLabel}>
          {`Ao clicar em “Concluir”, você concorda com os `}
          <Text
            style={{ color: "#4B3EFF" }}
          >{`Termos de Usos, Política de Privacidade e Política de Cookies`}</Text>
          {` do Commuta.`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
  },
  navbar: {
    paddingTop: 40,
    paddingBottom: 18,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
    marginBottom: 28,
  },
  labelButton: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "white",
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
    marginVertical: 8,
  },
  smallLabel: {
    fontFamily: "MontserratRegular",
    fontSize: 12,
    textAlign: "justify",
  },
});

export default Etapa4;
