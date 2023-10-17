import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { List, ProgressBar, TextInput } from "react-native-paper";
import Input from "../../../components/Input";
import { Chip } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Etapa3 = ({ navigation }) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [colecaoEstados, setColecaoEstados] = useState(["Ba"]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [colecaoCidades, setColecaoCidades] = useState(["eunapolis"]);

  const handleAccordionPress = (accordionId) => {
    setExpandedAccordion(
      expandedAccordion === accordionId ? null : accordionId
    );
  };

  const isAccordionExpanded = (accordionId) => {
    return expandedAccordion === accordionId;
  };

  const handleChangeEstado = (text) => {
    setEstadoSelecionado(text);
  };

  const handleChangeCidade = (text) => {
    setCidadeSelecionada(text);
  };

  const handleRemoverItem = (item, colecao, setColecao) => {
    const novaColecao = colecao.filter((elemento) => elemento !== item);
    setColecao(novaColecao);
  };

  const handleChangeColecaoEstado = () => {
    setColecaoEstados([...colecaoEstados, estadoSelecionado]);
    setEstadoSelecionado("");
  };

  const handleChangeColecaoCidade = () => {
    setColecaoCidades([...colecaoCidades, cidadeSelecionada]);
    setCidadeSelecionada("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.titulo}>Cadastro</Text>
      </View>
      <ProgressBar progress={0.75} color={"#4B3EFF"} />
      <View style={{ paddingTop: 16, gap: 16 }}>
        <Text style={[styles.titulo, { textAlign: "left" }]}>Interesse</Text>
        <Text style={styles.label}>
          Agora nos informe qual seu destino de interesse
        </Text>
      </View>
      <Input
        placeholderName={"Estado"}
        value={estadoSelecionado}
        onChangeText={handleChangeEstado}
        iconRight={
          <TextInput.Icon
            onPress={() => handleChangeColecaoEstado()}
            icon="plus"
            color={"#4B3EFF"}
          />
        }
      ></Input>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {colecaoEstados &&
          colecaoEstados?.map((item, index) => {
            return (
              <View style={[styles.chip]} key={index}>
                <Text style={styles.smalLabel}>{item}</Text>
                <TouchableOpacity
                  onPress={() =>
                    handleRemoverItem(item, colecaoEstados, setColecaoEstados)
                  }
                >
                  <AntDesign name="close" size={15} color="#4B3EFF" />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
      <Input
        value={cidadeSelecionada}
        onChangeText={handleChangeCidade}
        placeholderName={"Cidade"}
        iconRight={
          <TextInput.Icon
            icon="plus"
            color={"#4B3EFF"}
            onPress={() => handleChangeColecaoCidade()}
          />
        }
      ></Input>
      <View style={{ flexDirection: "row", marginBottom: 10, gap: 8 }}>
        {colecaoCidades &&
          colecaoCidades?.map((item, index) => {
            return (
              <View style={styles.chip} key={index}>
                <Text style={styles.smalLabel}>{item}</Text>
                <TouchableOpacity
                  onPress={() =>
                    handleRemoverItem(item, colecaoCidades, setColecaoCidades)
                  }
                >
                  <AntDesign name="close" size={15} color="#4B3EFF" />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
      <List.Accordion
        expanded={isAccordionExpanded("1")}
        onPress={() => handleAccordionPress("1")}
        title={<Text style={{ color: "#808080" }}>Órgão institucional </Text>}
        id="1"
        style={{
          borderColor: "#808080",
          borderWidth: 1,
          paddingVertical: 0,
          borderRadius: 10,
          backgroundColor: "white",
          marginBottom: 16,
          height: 48,
          color: "#808080",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            borderRadius: 10,
            borderTopRightRadius: 10,
            shadowOffset: {
              height: 1,
              width: 1,
            },
            elevation: 5,
          }}
        >
          <List.Item title="Item 1" />
          <List.Item title="Item 1" />
          <List.Item title="Item 1" />
          <List.Item title="Item 1" />
        </View>
      </List.Accordion>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 15,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white" }]}
            onPress={() => navigation.navigate("Etapa2")}
          >
            <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
              Anterior
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Etapa4")}
          >
            <Text style={[styles.labelButton]}>Proximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Etapa3;
