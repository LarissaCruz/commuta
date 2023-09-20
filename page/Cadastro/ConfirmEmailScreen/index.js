import { AntDesign } from "@expo/vector-icons";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ConfirmEmailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/email.png")}
        style={styles.image}
      ></Image>
      <View style={{ paddingTop: 16, gap: 16 }}>
        <Text style={[styles.titulo]}>Confirme o seu email</Text>
        <Text style={styles.label}>
          Tudo certo, enviamos um link de confirmação para o seu email.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { marginTop: 5 }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.labelButton]}>Ok</Text>
        <AntDesign name="check" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 328,
    height: 232.513,
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
    textAlign: "center",
    paddingHorizontal: 20,
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
    width: "100%",
  },
});
