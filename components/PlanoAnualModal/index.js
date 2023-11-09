import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

import { StatusBar } from 'react-native';
import BottomSheetComponent from '../BottomSheetComponent';

const PlanoAnualModal = ({ visible, onClose, navigation, setVisible }) => {
  const [isVisibleBottomSheet, setIsVisibleBottomSheet] = React.useState(false);
  const modalizeRef = React.useRef(null);

  const handlePress = () => {
    setIsVisibleBottomSheet(true);
    setVisible(false)
   
  };

  const onCloseModal =() => {
   // setVisible(false)
    setIsVisibleBottomSheet(false)
  }

  return (
    <>
      {isVisibleBottomSheet===false ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(26, 26, 26, 0.5)" />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1A1A1A', opacity: 0.5 }} />
            <View style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24, borderRadius: 10, width: '90%' }}>
              <Text style={[styles.titulo, { marginBottom: 16 }]}>Seja Premium</Text>
              <Text style={styles.label}>  
                {'\u2022'} Livre de anúncios; {'\n'} 
                {'\u2022'} Saberá mais sobre as pessoas que encontra; {'\n'} 
                {'\u2022'} Maior acesso a oportunidades através de triangulação de dados; {'\n'} 
                {'\u2022'} Recomendações compatíveis próximas; {'\n'} 
                {'\u2022'} Busca otimizada dos melhores parceiros para troca sem você precisar entrar no App; {'\n'} 
                {'\u2022'} Notificamos você sobre qualquer oportunidade interessante; {'\n'} 
                {'\u2022'} Priorizamos você quando o assunto é oportunidades. {'\n'} 
              </Text>
              <Text style={[styles.label, { textAlign: "center" }]}>Por apenas:</Text>
              <Text style={styles.value}>R$9,99</Text>
              <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={handlePress}
              >
                <Text style={styles.buttonText}>Assinar!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => setVisible(false)}
              >
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Agora não
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisibleBottomSheet}
        onRequestClose={onCloseModal}
      >
        <View style={{ flex: 1, }}>
          <StatusBar barStyle="light-content" backgroundColor="rgba(26, 26, 26, 0.5)" />
          <TouchableOpacity style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1A1A1A', opacity: 0.5}} onPress={onCloseModal} />
          <BottomSheetComponent  onCloseModal={onCloseModal}/>
        </View>
      </Modal>
      
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "MontserratMedium",
    fontSize: 20,
    color: "#1A1A1A",
    lineHeight: 24,
    padding: 0,
    textAlign: "center"
  },
  label: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
    color: "#1A1A1A",
  },
  value: {
    fontFamily: "MontserratBlack",
    fontSize: 36,
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  primaryButton: {
    backgroundColor: "#4B3EFF",
  },
  secondaryButton: {
    backgroundColor: "white",
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 18,
    color: "white",
  },
  secondaryButtonText: {
    color: "#4B3EFF",
  },
});

export default PlanoAnualModal;
