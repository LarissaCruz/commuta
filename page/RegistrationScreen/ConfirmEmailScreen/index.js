import { AntDesign } from "@expo/vector-icons";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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
