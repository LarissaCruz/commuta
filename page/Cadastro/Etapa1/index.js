import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ProgressBar, Checkbox } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import Input from "../../../components/Input";

function Etapa1({ navigation }) {
  const [checked, setChecked] = useState(false);

  const handleContinue = () => {
    navigation.navigate("Etapa2");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

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
      <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.photoButton}>
          <MaterialIcons name="add-a-photo" size={24} color="#4B3EFF" />
        </TouchableOpacity>
        <Text style={[styles.label, { color: "#333333" }]}>
          Foto (Opcional)
        </Text>
      </View>
      <Input placeholderName={"Nome"} style={styles.input} />
      <Input placeholderName={"Sobrenome"} style={styles.input} />
      <Input
        placeholderName={"Código de indicação (Opcional)"}
        style={styles.input}
      />
      <Input placeholderName={"Telefone (Opcional)"} style={styles.input} />
      <View style={styles.checkboxContainer}>
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
      <Input placeholderName={"Telefone (Opcional)"} style={styles.input} />
      <View style={styles.checkboxContainer}>
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
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.labelButton}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "white" }]}
        onPress={handleLogin}
      >
        <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
          Já possuo uma conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Etapa1;
