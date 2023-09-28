import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CardHeader from "../../components/CardHeader";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function Detalhes({ route }) {
  const isScreenContact = route.name != "Detalhes do Interesse";
  return (
    <ScrollView style={styles.container}>
      <CardHeader />
      {isScreenContact && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar.Image
                size={100}
                source={require("../../assets/avatar2.png")}
              />
            </View>
            <View style={{ justifyContent: "flex-start" }}>
              <Foundation name="trash" size={24} color="black" />
            </View>
          </View>

          <Text style={[styles.titulo, { marginTop: 10 }]}>
            Amanda Oliveira Souza
          </Text>
        </View>
      )}

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.titulo}>Trabalho Atual:</Text>
        <View style={styles.containerRow}>
          <Ionicons name="person" size={20} color="#A59EFF" />

          <Text style={styles.label}>
            Professor (Matemática - Geometria) (BA)
          </Text>
        </View>
        <View style={styles.containerRow}>
          <MaterialIcons name="apartment" size={20} color="#A59EFF" />
          <Text style={styles.label}>
            Instituto Federal de Educação Ciência e Tecnologia
          </Text>
        </View>
        <View style={[styles.containerRow]}>
          <MaterialIcons name="place" size={20} color="#A59EFF" />
          <Text style={[styles.label, styles.border]}>
            Oferece: Ilhéus (BA)
          </Text>
        </View>
        <Text style={[styles.titulo, , { marginTop: 16 }]}>
          Deseja Trabalhar em :
        </Text>
        <View style={styles.containerRow}>
          <MaterialIcons name="apartment" size={24} color="#A59EFF" />
          <Text style={styles.label}>
            Instituto Federal de Educação Ciência e Tecnologia
          </Text>
        </View>
        <View style={styles.containerRow}>
          <MaterialIcons name="place" size={20} color="#A59EFF" />
          <Text style={styles.label}>Eunápolis (BA)</Text>
        </View>
        {isScreenContact ? (
          <View
            style={[
              styles.containerRow,
              { gap: 30, flexWrap: "wrap", marginTop: 16 },
            ]}
          >
            <TouchableOpacity style={styles.button} onPress={null}>
              <FontAwesome5 name="whatsapp" size={20} color="white" />
              <Text style={styles.labelbutton}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.outline, styles.borderButton]}
              onPress={null}
            >
              <Foundation name="telephone" size={24} color="#4B3EFF" />

              <Text style={[styles.labelbutton, { color: "#4B3EFF" }]}>
                Telefone
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.outline, styles.borderButton]}
              onPress={null}
            >
              <MaterialIcons name="email" size={24} color="#4B3EFF" />
              <Text style={[styles.labelbutton, { color: "#4B3EFF" }]}>
                Ignorar
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[{ marginTop: 30, gap: 20 }]}>
            <TouchableOpacity style={styles.button} onPress={null}>
              <Text style={styles.labelbutton}>Gostei</Text>
              <AntDesign name="like1" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.outline]}
              onPress={null}
            >
              <AntDesign name="dislike1" size={20} color="#333333" />
              <Text style={[styles.labelbutton, { color: "#333333" }]}>
                Ignorar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
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
  containerRow: {
    flexDirection: "row",
    gap: 8.5,
  },
  label: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
    color: "#333333",
    paddingBottom: 8,
    flexWrap: "wrap",
    flex: 1,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#49454F",
  },
  borderButton: {
    borderColor: "#4B3EFF",
    borderWidth: 2,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    gap: 8,
    backgroundColor: "#4B3EFF",
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    backgroundColor: "white",
  },
  labelbutton: {
    fontSize: 18,
    fontFamily: "MontserratMedium",
    color: "white",
    marginBottom: 8,
  },
});

export default Detalhes;
