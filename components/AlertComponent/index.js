// AlertComponent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AlertComponent = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>Por favor, preencha todos os campos obrigatórios.</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeButton}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  alertContainer: {
    backgroundColor: '#ffcccb',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  alertText: {
    color: '#ff0000',
    textAlign: 'center',
  },
  closeButton: {
    color: '#0000ff',
    marginTop: 5,
    fontWeight: 'bold',
  },
};

export default AlertComponent;
