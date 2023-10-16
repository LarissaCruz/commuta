import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const ImageCustom = ({image, setImage}) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result?.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.photoContainer}>
      {image ? (
        <>
          <TouchableOpacity
            style={{ position: 'absolute', right: 100, top: -10, zIndex: 2 }}
            onPress={() => setImage(null)}
          >
            <AntDesign name="close" size={16} color="black" />
          </TouchableOpacity>
        <View>
        
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        </>
      ) : (
        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <MaterialIcons name="add-a-photo" size={24} color="#4B3EFF" />
        </TouchableOpacity>
      )}
      <Text style={[styles.label, { color: "#333333" }]}>
        Foto (Opcional)
      </Text>
    </View>
  );
};

export default ImageCustom;

const styles = StyleSheet.create({
  photoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  photoButton: {
    width: 124,
    height: 124,
    backgroundColor: "#C9C5FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 12,
  },
  image: {
    width: 124,
    height: 124, 
    borderRadius: 12,
    marginBottom: 12,
  }
})