import React, { useState } from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { List, ProgressBar } from "react-native-paper";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../../context/FormContext";
import Input from "../../../components/Input";
import AccordionItem from "../../../components/AccordionItem"; // Importando o componente AccordionItem
import styles from "./styles";

function Etapa2({ navigation }) {
  const [expandedArea, setExpandedArea] = useState(false);
  const [expandedSubArea, setExpandedSubArea] = useState(false);
  const [expandedState, setExpandedState] = useState(false);
  const [selectedItemArea, setSelectedItemArea] = useState(null);
  const [selectedItemSubArea, setSelectedItemSubArea] = useState(null);
  const [selectedItemState, setSelectedItemState] = useState(null);
  const [loading, setLoading] = useState(false);
  const { formData, updateFormData } = useFormContext(); 

  const handleItemPress = (item, setSelectedItem,setExpanded) => {
    setSelectedItem(item);
    setExpanded(false); // Expande o acordeão quando um item é selecionado
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
 
  const onSubmit = async ({ cargo, orgao}) => {
    if (selectedItemArea!==null && selectedItemSubArea!==null && selectedItemState!== null){
      const data = {
        cargo,
        area:selectedItemArea,
        subArea:selectedItemSubArea,
        uf:selectedItemState,
        orgao,
      };

    try {
      Keyboard.dismiss();
      setLoading(true);
      console.log("e", data);
      updateFormData(data);
      navigation.navigate("Etapa3");

    } catch (e) {
      setLoading(false);
      // ShowAlert("Erro", e.message);
    }
    }
   
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

      <Input
        placeholderName="Cargo"
        name="cargo"
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      />

      <AccordionItem
        control={control}
        expanded={expandedArea}
        onPress={() => setExpandedArea(!expandedArea)}
        title={selectedItemArea ||"Área"}
        setSelectedItem={setSelectedItemArea} 
        id="1"
      >
        <View>
        <List.Item title="Item 1" onPress={() => handleItemPress("Item 1",setSelectedItemArea,setExpandedArea)} />
        <List.Item title="Item 2" onPress={() => handleItemPress("Item 2",setSelectedItemArea,setExpandedArea)} />
        <List.Item title="Item 3" onPress={() => handleItemPress("Item 3",setSelectedItemArea,setExpandedArea)} />
        <List.Item title="Item 4" onPress={() => handleItemPress("Item 4",setSelectedItemArea,setExpandedArea)} />
        </View>
      </AccordionItem>

      <AccordionItem
      expanded={expandedSubArea}
      onPress={() => setExpandedSubArea(!expandedSubArea)}
      title={selectedItemSubArea || "Sub-área (Opcional)"}
      id="2"
      setSelectedItem={setSelectedItemSubArea} 
      control={control}// Passa a função setSelectedItem para o AccordionItem
    >
      <View>
        <List.Item title="Item 1" onPress={() => handleItemPress("Item 1",setSelectedItemSubArea,setExpandedSubArea)} />
        <List.Item title="Item 2" onPress={() => handleItemPress("Item 2",setSelectedItemSubArea,setExpandedSubArea)} />
        <List.Item title="Item 3" onPress={() => handleItemPress("Item 3",setSelectedItemSubArea,setExpandedSubArea)} />
        <List.Item title="Item 4" onPress={() => handleItemPress("Item 4",setSelectedItemSubArea,setExpandedSubArea)} />
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
           control={control}
            expanded={expandedState}
            onPress={() => {
              setExpandedState(!expandedState)
            }}
            setSelectedItem={setSelectedItemState} 
            id="3"
            title={selectedItemState ||"UF"}
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
              <List.Item title="BA" onPress={() => handleItemPress("BA",setSelectedItemState,setExpandedState)} />
              <List.Item title="ES" onPress={() => handleItemPress("ES",setSelectedItemState,setExpandedState)} />
              <List.Item title="SP" onPress={() => handleItemPress("SP",setSelectedItemState,setExpandedState)} />
              <List.Item title="MG" onPress={() => handleItemPress("MG",setSelectedItemState,setExpandedState)} />
            </View>
          </AccordionItem>
        </View>
      </View>

      <Input
        placeholderName={"Órgão institucional"}
        name={"orgao"}
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
            <Text style={styles.labelButton} onPress={handleSubmit(onSubmit)} >Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Etapa2;
