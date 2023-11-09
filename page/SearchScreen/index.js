import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CardHeader from "../../components/CardHeader";
import { TextInput } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";

import SearchResultCard from "../../components/SearchResultCard";
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
  const [noMoreCard, setNoMoreCard] = React.useState(false);
  const [cardArray, setCardArray] = React.useState(DATA);
  const [swipeDirection, setSwipeDirection] = React.useState("--");
  const [isFocused, setIsFocused] = React.useState(false);
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

  return (
    <View style={styles.container}>
      <CardHeader></CardHeader>
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
        style={styles.input}
        mode="outlined"
        placeholder="Qual cargo procura?"
        right={<TextInput.Icon icon="magnify" color={"#4B3EFF"} />}
      />
      <Text>Sugestões</Text>
      <View style={styles.cardContainer}>
        {cardArray.map((item, index) => (
          <SearchResultCard
            data={cardArray}
            currentIndex={index}
            key={index}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
          <Text style={{ fontSize: 22, color: "#000" }}>Sem Mais Cards.</Text>
        ) : null}
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
});

export default SearchScreen;
