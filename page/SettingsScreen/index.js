import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardHeader from "../../components/CardHeader";
import { AntDesign } from '@expo/vector-icons'; 
import PlanoAnualModal from "../../components/PlanoAnualModal";

function Configuracao({ navigation }) {
  const [visible, setVisible] = React.useState(false)
  return (
    <View style={styles.container}>
      <PlanoAnualModal visible={visible} setVisible={setVisible}></PlanoAnualModal>
      <CardHeader />
      <View style={{paddingHorizontal:24}}>
        <Text style={[styles.titulo, { marginTop: 10 }]}>
          Estados:
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <View style={[styles.chip]} >
            <Text style={styles.smalLabel}>Acre (AC)</Text>
          </View>
          <View style={[styles.chip]} >
            <Text style={styles.smalLabel}>Acre (AC)</Text>
          </View>
        </View>
        <Text style={[styles.titulo, { marginTop: 10 }]}>
        Cidades:
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <View style={[styles.chip]} >
            <Text style={styles.smalLabel}>Rio Branco (AC)</Text>
          </View>
          <View style={[styles.chip]} >
            <Text style={styles.smalLabel}>Salvador (BA)</Text>
          </View>
        </View>
        <Text style={[styles.titulo, { marginTop: 10 }]}>
        Órgão Institucional:
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <View style={[styles.chip]} >
            <Text style={styles.smalLabel}>Instituto Federal de Educação Ciência e Tecnologia</Text>
          </View>
        </View>
        
      </View> 
      <TouchableOpacity style={styles.button} onPress={()=>setVisible(true)}>
            <AntDesign name="plus" size={20} color="white" />
            <Text style={styles.labelbutton}>Adicionar Interesse</Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 20,
    padding: 0,
    marginBottom: 17,
  },
  chip: {
    paddingLeft: 16,
    paddingVertical: 8,
    paddingRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EDECFF",
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  smalLabel: {
    fontFamily: "MontserratMedium",
    fontSize: 14,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 12,
    gap: 8,
    backgroundColor: "#4B3EFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop:40,
    marginHorizontal:16
  },
  labelbutton: {
    fontSize: 16,
    fontFamily: "MontserratMedium",
    color: "white",
   
  },
});

export default Configuracao;
