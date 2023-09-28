import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import Input from "../../../components/Input";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

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
            onPress={() => navigation.navigate("ConfirmEmail")}
          >
            <Text style={[styles.labelButton]}>Concluir</Text>

            <AntDesign name="check" size={20} color="white" />
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

export default Etapa4;
