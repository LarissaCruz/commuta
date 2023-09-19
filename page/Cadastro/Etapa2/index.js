import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, ProgressBar } from "react-native-paper";
import Input from "../../../components/Input";
import { TouchableOpacity } from "react-native-gesture-handler";

function Etapa2({ navigation }) {
  const [expandedAccordion, setExpandedAccordion] = React.useState(null);

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
      <ProgressBar progress={0.5} color={"#4B3EFF"} />
      <View style={{ paddingTop: 16, gap: 16 }}>
        <Text style={[styles.titulo, { textAlign: "left" }]}>
          Situação atual
        </Text>
        <Text style={styles.label}>
          Prazer conhecer você. Agora nos conte sobre o seu trabalho atual.
        </Text>
      </View>
      <Input placeholderName={"Cargo"}></Input>
      <List.AccordionGroup>
        <List.Accordion
          expanded={isAccordionExpanded("1")}
          onPress={() => handleAccordionPress("1")}
          title={<Text style={{ color: "#808080" }}>Área </Text>}
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
        <List.Accordion
          expanded={isAccordionExpanded("1")}
          onPress={() => handleAccordionPress("1")}
          title={<Text style={{ color: "#808080" }}>Sub-área (Opcional) </Text>}
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
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Input
            placeholderName={"Cidade2"}
            stylesInput={{ width: "65%" }}
          ></Input>
          <List.Accordion
            expanded={isAccordionExpanded("1")}
            onPress={() => handleAccordionPress("1")}
            title={<Text style={{ color: "#808080" }}>UF </Text>}
            id="1"
            style={{
              borderColor: "#808080",
              borderWidth: 1,
              paddingVertical: 0,
              borderRadius: 8,
              backgroundColor: "white",
              marginBottom: 10,
              height: 48,
              color: "#808080",
              width: 100,
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
        </View>
        <Input placeholderName={"Órgão institucional"}></Input>
      </List.AccordionGroup>
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
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>
              Anterior
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Etapa3")}
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

export default Etapa2;
