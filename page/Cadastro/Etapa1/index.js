import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../../../components/Input";
import { Checkbox } from "react-native-paper";

function Etapa1({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titulo}>Cadastro</Text>
      </View>
      <ProgressBar progress={0.25} color={"#4B3EFF"} />
      <View style={{ paddingTop: 16, gap: 16 }}>
        <Text style={[styles.titulo, { textAlign: "left" }]}>
          Informações pessoais
        </Text>
        <Text style={styles.label}>
          Preencha os campos abaixo para criar sua conta no Commuta.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "coluns",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 124,
            height: 124,
            backgroundColor: "#C9C5FF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <MaterialIcons name="add-a-photo" size={24} color="#4B3EFF" />
        </TouchableOpacity>
        <Text style={[styles.label, { color: "#333333" }]}>
          Foto (Opcional)
        </Text>
      </View>
      <Input placeholderName={"Nome"}></Input>
      <Input placeholderName={"Sobrenome"}></Input>
      <Input placeholderName={"Código de indicação (Opcional)"}></Input>
      <Input placeholderName={"Telefone (Opcional)"}></Input>
      <View
        style={{
          flexDirection: "row",
          gap: 8,

          alignItems: "center",
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#8178FF"
          uncheckedColor="#8178FF"
        />
        <Text>Esse número é WhatsApp</Text>
      </View>
      <Input placeholderName={"Telefone (Opcional)"}></Input>
      <View
        style={{
          flexDirection: "row",
          gap: 8,

          alignItems: "center",
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#8178FF"
          uncheckedColor="#8178FF"
        />
        <Text>Esse número é WhatsApp</Text>
      </View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Etapa2")}
      >
        <Text style={[styles.labelButton]}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "white" }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
          Já possuo uma conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
  input: {
    fontFamily: "MontserratRegular",
    fontSize: 16,
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
});

export default Etapa1;
