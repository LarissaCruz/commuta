import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { List, ProgressBar } from "react-native-paper";
import { useForm } from "react-hook-form";

import Input from "../../../components/Input";
import AccordionItem from "../../../components/AccordionItem"; // Importando o componente AccordionItem
import styles from "./styles";

function Etapa2({ navigation }) {
  const [expandedArea, setExpandedArea] = useState(false);
  const [expandedSubArea, setExpandedSubArea] = useState(false);
  const [expandedState, setExpandedState] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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

      <Input
        placeholderNamer="Cargo"
        name="Cargo"
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      />

      <AccordionItem
        expanded={expandedArea}
        onPress={() => setExpandedArea(!expandedArea)}
        title="Área"
        id="1"
      >
        <View>
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
        </View>
      </AccordionItem>

      <AccordionItem
        expanded={expandedSubArea}
        onPress={() => setExpandedSubArea(!expandedSubArea)}
        title="Sub-área (Opcional)"
        id="2"
      >
        <View>
          <List.Item title="Item 1" />
          <List.Item title="Item 2" />
          <List.Item title="Item 3" />
          <List.Item title="Item 4" />
        </View>
      </AccordionItem>

      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems:"center" }}>
        <View style={{ width: "65%" }}>
          <Input
            placeholderName={"Cidade"}
            name={"Cidade"}
            control={control}
            rules={{
              required: "Verifique se todos os campos estão preenchidos",
            }}
          />
        </View>
        <View style={{ alignItems: "center", height: 55, zIndex:10 }}>
          <AccordionItem
            expanded={expandedState}
            onPress={() => setExpandedState(!expandedState)}
            title="UF"
            id="3"
            style={{
              borderColor: "#808080",
              borderWidth: 1,
              paddingVertical: 0,
              borderRadius: 8,
              backgroundColor: "white",
              height: 48,
              width: 100
            }}
          >
            <View style={{
              backgroundColor: "white",
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 2,
              borderRadius: 10,
             
              shadowOffset: {
                height: 1,
                width: 1,
              },
              elevation: 5,
              marginTop: 10,
              zIndex: 2, // Ajuste o zIndex aqui
            }}>
              <List.Item title="Item 1" />
              <List.Item title="Item 2" />
              <List.Item title="Item 3" />
              <List.Item title="Item 4" />
            </View>
          </AccordionItem>
        </View>
      </View>

      <Input
        placeholderName={"Órgão institucional"}
        name={"Orgao"}
        control={control}
        stylesInput={{ zIndex:1}}
      />

      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 15 }}>
        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 10 }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white" }]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={[styles.labelButton, { color: "#4B3EFF" }]}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Etapa3")}
          >
            <Text style={styles.labelButton}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Etapa2;
