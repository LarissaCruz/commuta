import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { List, ProgressBar, TextInput } from "react-native-paper";
import Input from "../../../components/Input";
import { Chip } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
function Etapa3({ navigation }) {
  const [expandedAccordion, setExpandedAccordion] = React.useState(null);
  const [estado, setEstado] = React.useState(["Ba"]);
  const [cidades, setCidade] = React.useState(["eunapolis"]);
  const handleAccordionPress = (accordionId) => {
    setExpandedAccordion(
      expandedAccordion === accordionId ? null : accordionId
    );
  };

  const isAccordionExpanded = (accordionId) => {
    return expandedAccordion === accordionId;
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
        iconRight={
          <TextInput.Icon
            onPress={() => console.log("teste")}
            icon="plus"
            color={"#4B3EFF"}
          />
        }
      ></Input>
      {estado &&
        estado.map((item, index) => {
          return (
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View style={styles.chip}>
                <Text style={styles.smalLabel}>item</Text>
                <AntDesign name="close" size={15} color="#4B3EFF" />
              </View>
            </View>
          );
        })}
      <Input
        placeholderName={"Cidade"}
        iconRight={<TextInput.Icon icon="plus" color={"#4B3EFF"} />}
      ></Input>
      {cidades &&
        cidades.map((item, index) => {
          return (
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <View style={styles.chip}>
                <Text style={styles.smalLabel}>item</Text>
                <AntDesign name="close" size={15} color="#4B3EFF" />
              </View>
            </View>
          );
        })}
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
  smalLabel: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
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
  chip: {
    paddingLeft: 16,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#A59EFF",
    backgroundColor: "#EDECFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
});

export default Etapa3;
