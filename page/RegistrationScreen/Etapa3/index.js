import React, { useState } from "react";
import { View, Text, TouchableOpacity , Keyboard} from "react-native";
import { List, ProgressBar, TextInput } from "react-native-paper";
import Input from "../../../components/Input";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useForm } from "react-hook-form";
import AccordionItem from "../../../components/AccordionItem";
import { useFormContext } from "../../../context/FormContext";

const Etapa3 = ({ navigation }) => {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [colecaoEstados, setColecaoEstados] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [colecaoCidades, setColecaoCidades] = useState([]);
  const [expandedOrgao, setExpandedOrgao] = useState(false);
  const [selectedItemOrgao, setSelectedItemOrgao] = useState(null);
  const { formData, updateFormData } = useFormContext(); 
  const [loading, setLoading] = useState(false);

  const handleItemPress = (item, setSelectedItem,setExpanded) => {
    setSelectedItem(item);
    setExpanded(false); // Expande o acordeão quando um item é selecionado
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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
 
  const onSubmit = () => {

    if (colecaoEstados.length > 0 && colecaoCidades.length > 0 && selectedItemOrgao!== null){
      const data = {
        colecaoEstados,
        colecaoCidades,
        orgao:selectedItemOrgao,
      };
      try{
        setLoading(true);
        console.log("e", data);
        updateFormData(data);
        navigation.navigate("Etapa4");
      }
      catch{
        console.log("erro")
      }
      
    }
   
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
        name="Estado"
        control={control}
        placeholderName={"Estado"}
        valueText={estadoSelecionado}
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
        {colecaoEstados.length > 0 &&
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
          name="Cidade"
          control={control}
        
        valueText={cidadeSelecionada}
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
        {colecaoCidades.length > 0  &&
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

      <AccordionItem
        control={control}
        expanded={expandedOrgao}
        onPress={() => setExpandedOrgao(!expandedOrgao)}
        title={selectedItemOrgao ||"Órgão institucionalea"}
        setSelectedItem={setSelectedItemOrgao} 
        id="1"
      >
        <View>
        <List.Item title="Item 1" onPress={() => handleItemPress("Item 1",setSelectedItemOrgao, setExpandedOrgao)} />
        <List.Item title="Item 2" onPress={() => handleItemPress("Item 2",setSelectedItemOrgao, setExpandedOrgao)} />
        <List.Item title="Item 3" onPress={() => handleItemPress("Item 3",setSelectedItemOrgao, setExpandedOrgao)} />
        <List.Item title="Item 4" onPress={() => handleItemPress("Item 4",setSelectedItemOrgao, setExpandedOrgao)} />
        </View>
      </AccordionItem>

     
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
            onPress={()=>onSubmit()} 
          >
            <Text style={[styles.labelButton]}>Proximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Etapa3;
