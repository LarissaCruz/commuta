import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Keyboard, Alert } from "react-native";
import { ProgressBar, Checkbox } from "react-native-paper";
import { useForm } from "react-hook-form";
import styles from "./styles";
import Input from "../../../components/Input";
import ImageCustom from "../../../components/ImageCustom";
import { useFormContext } from "../../../context/FormContext";

function Etapa1({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { formData, updateFormData } = useFormContext(); 
  const [checkedNumberOne, setCheckedNumberOne] = useState(false);
  const [checkedNumberTwo, setCheckedNumberTwo] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    navigation.navigate("Login");
  };


  const onSubmit = async ({ nome, sobrenome, codigo, telefoneOne, telefoneTwo }) => {
    const data = {
      nome,
      sobrenome,
      codigo,
      telefoneOne,
      telefoneTwo,
      imagePerfil: image,
      checkedNumberOne,
      checkedNumberTwo
    };
    try {
      Keyboard.dismiss();
      setLoading(true);
      
      updateFormData(data);
      navigation.navigate("Etapa2");
    } catch (e) {
      setLoading(false);
      // ShowAlert("Erro", e.message);
    }
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
      <ImageCustom setImage={setImage} image={image} />
      <Input
        placeholderName={"Nome"}
        style={styles.input}
        name={"nome"}
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      />
       {errors.nome && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}
      <Input
        placeholderName={"Sobrenome"}
        style={styles.input}
        name={"sobrenome"}
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      />
       {errors.sobrenome && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}
      <Input
        placeholderName={"Código de indicação (Opcional)"}
        keyboardType="numeric"
        style={styles.input}
        name={"codigo"}
        control={control}
      />
      <Input
        placeholderName={"Telefone (Opcional)"}
        style={styles.input}
        name={"telefoneOne"}
        control={control}
        keyboardType="numeric"
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checkedNumberOne ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedNumberOne(!checkedNumberOne);
          }}
          color="#8178FF"
          uncheckedColor="#8178FF"
        />
        <Text>Esse número é WhatsApp</Text>
      </View>
      <Input
        placeholderName={"Telefone (Opcional)"}
        style={styles.input}
        name={"telefoneTwo"}
        control={control}
        keyboardType="numeric"
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checkedNumberTwo ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedNumberTwo(!checkedNumberTwo);
          }}
          color="#8178FF"
          uncheckedColor="#8178FF"
        />
        <Text>Esse número é WhatsApp</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
