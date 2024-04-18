import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeUserScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    switch (category) {
      case 'RecognitionScreen':
        navigation.navigate('Recognition');
        break;
      case 'SatisfactionSurveyScreen':
        navigation.navigate('SatisfactionSurvey');
        break;
      case 'KaizenScreen':
        navigation.navigate('Kaizen');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Agregar el fondo de degradado */}
      <View style={styles.background}>
        {/* Botones y contenido */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff6f61', marginBottom: 10 }]}
          onPress={() => handleCategoryPress('RecognitionScreen')}
        >
          <Text style={styles.buttonText}>Reconocimiento</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6bb0f5', marginBottom: 10 }]}
          onPress={() => handleCategoryPress('SatisfactionSurveyScreen')}
        >
          <Text style={styles.buttonText}>Encuestas de Satisfacción</Text>
   
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#68d8d6' }]}
          onPress={() => handleCategoryPress('KaizenScreen')}
        >
          <Text style={styles.buttonText}>Kaizen</Text>
      
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.8,
    height: 100, // Aumentar la altura del botón para acomodar el texto descriptivo
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10, // Agregar relleno para separar el texto
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonDescription: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HomeUserScreen;
