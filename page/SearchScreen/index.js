import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import CardHeader from "../../components/CardHeader";
import { TextInput, List } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import SearchResultCard from "../../components/SearchResultCard";

import { Ionicons } from '@expo/vector-icons'; 
import Input from "../../components/Input";
import AccordionItem from "../../components/AccordionItem";
import { useForm } from "react-hook-form";

const DATA = [
  {
    title: "Afro vibes",
    location: "Mumbai, India",
    date: "Nov 17th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg",
  },
  {
    title: "Jungle Party",
    location: "Unknown",
    date: "Sept 3rd, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg",
  },
  {
    title: "4th Of July",
    location: "New York, USA",
    date: "Oct 11th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg",
  },
  {
    title: "Summer festival",
    location: "Bucharest, Romania",
    date: "Aug 17th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg",
  },
  {
    title: "BBQ with friends",
    location: "Prague, Czech Republic",
    date: "Sept 11th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg",
  },
  {
    title: "Festival music",
    location: "Berlin, Germany",
    date: "Apr 21th, 2021",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg",
  },
  {
    title: "Beach House",
    location: "Liboa, Portugal",
    date: "Aug 12th, 2020",
    poster:
      "https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg",
  },
];

function SearchScreen() {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const [cardArray, setCardArray] = useState(DATA);
  const [swipeDirection, setSwipeDirection] = useState("--");
  const [isFocused, setIsFocused] = useState(false);
  const [isModalFilter, setIsModalFilter] = useState(false);
  const [expandedArea, setExpandedArea] = useState(false);
  const [expandedSubArea, setExpandedSubArea] = useState(false);
  const [expandedState, setExpandedState] = useState(false);
  const [selectedItemArea, setSelectedItemArea] = useState(null);
  const [selectedItemSubArea, setSelectedItemSubArea] = useState(null);
  const [selectedItemState, setSelectedItemState] = useState(null);

  const handleItemPress = (item, setSelectedItem,setExpanded) => {
    setSelectedItem(item);
    setExpanded(false);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const removeCard = (id) => {
    cardArray.splice(
      cardArray.findIndex((item) => item.id == id),
      1
    );
    setCardArray(cardArray);
    if (cardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };
  

  const onSubmit = async ({ cargo, orgao, cidade }) => {
    if (selectedItemArea!==null && selectedItemSubArea!==null && selectedItemState!== null){
      const data = {
        cargo,
        area: selectedItemArea,
        subArea: selectedItemSubArea,
        uf: selectedItemState,
        orgao,
        cidade
      };

      try {
        Keyboard.dismiss();
        setLoading(true);
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
      <CardHeader styleHeader={{ marginHorizontal: 2 }}></CardHeader>
      <TouchableOpacity onPress={() => setIsModalFilter(true)}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          theme={{
            colors: {
              outline: "#808080",
              primary: isFocused ? "#4B3EFF" : "#808080",
              underlineColor: "transparent",
            },
            roundness: 10,
          }}
          placeholderTextColor="#808080"
          style={[styles.input, { pointerEvents: "none" }]}
          mode="outlined"
          placeholder="Qual cargo procura?"
          right={<TextInput.Icon icon="magnify" color={"#4B3EFF"} />}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalFilter}
        onRequestClose={()=>setIsModalFilter(false)}
      >
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <StatusBar barStyle="light-content" backgroundColor="#ffff" />
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1A1A1A', opacity: 0.5 }} />
          <View style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24, width: '100%' }}>
            <View style={{flexDirection:'row', gap:120}}>
              <TouchableOpacity onPress={()=>  setIsModalFilter(false)} >
                <Ionicons name="close-outline" size={28} color="#4B3EFF" />
              </TouchableOpacity>
             
              <Text style={[styles.titulo,{fontSize: 20}]}>Busca</Text>
            </View>

            <Input
              placeholderName="Cargo"
              name="cargo"
              control={control}
              rules={{
                required: "Verifique se todos os campos estão preenchidos",
              }}
            />
            {errors.cargo && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}

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
              control={control}
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
                  name={"cidade"}
                  control={control}
                  rules={{
                    required: "Verifique se todos os campos estão preenchidos",
                  }}
                />
                {errors.cidade && <Text style={styles.error}>Esse campo é obrigatório esta preenchido</Text>}
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
                    zIndex: 2,
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
              rules={{
                required: "Verifique se todos os campos estão preenchidos",
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Etapa3")}
            >
              <Text style={styles.labelButton} onPress={handleSubmit(onSubmit)} >Pesquisar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.titulo}>Sugestões</Text>
      <View style={styles.cardContainer}>
        {cardArray.map((item, index) => (
          <SearchResultCard
            data={cardArray}
            currentIndex={index}
            key={index}
            item={item}
            removeCard={() => removeCard(item.id)}
            onSwipe={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
         <ActivityIndicator size="large" color="#4B3EFF" />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 16,
    backgroundColor: "#FCFCFC",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  input: {
    backgroundColor: "white",
    fontFamily: "MontserratRegular",
    lineHeight: 24,
    marginBottom: 16,
  },
  label: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    marginBottom: 16,
  },
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: "#000000",
    lineHeight: 24,
    padding: 0,
    marginBottom: 8,
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
  labelButton: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
    color: "white",
  },
  error:{color:"red", fontSize:10}
});

export default SearchScreen;
