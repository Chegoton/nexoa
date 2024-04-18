import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecognitionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Este es el texto que estaba causando el error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default RecognitionScreen;