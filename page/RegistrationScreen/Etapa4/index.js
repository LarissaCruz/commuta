import React ,  {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity , Keyboard} from "react-native";
import { ProgressBar } from "react-native-paper";
import Input from "../../../components/Input";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../../context/FormContext";

function Etapa4({ navigation }) {
  const { formData, updateFormData } = useFormContext(); 
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, senha }) => {
    const data = {
      email,
      senha
    }
    try {
      Keyboard.dismiss();
      setLoading(true);
      updateFormData(data);
      navigation.navigate("ConfirmEmail")
    } catch (e) {
      setLoading(false);
      //ShowAlert("Erro", e.message);
    }
  };

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
      <Input placeholderName={"Email"}
        name="email"
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            message: "email inválido",
          },
        }}
      />
      {errors.email && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}
       <Input
        name="senha"
        control={control}
        secureTextEntry={!isPasswordVisible}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
        placeholderName={"Senha"}
        iconRight={
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            color={"#4B3EFF"}
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          />
        }
      />
      {errors.senha && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}    
      <Input
        name="confirmSenha"
        control={control}
        secureTextEntry={!isPasswordVisible}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
        placeholderName={"Repetir senha"}
        iconRight={
        <TextInput.Icon
          icon={isPasswordVisible ? "eye-off" : "eye"}
          color={"#4B3EFF"}
          onPress={() => setIsPasswordVisible((prev) => !prev)}
        />
      }
      />
      {errors.confirmSenha && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}
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
            onPress={handleSubmit(onSubmit)} 
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
