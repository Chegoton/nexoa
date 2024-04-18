import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Cambié la importación de react-native-web a react-native

const SatisfactionSurveyScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>this is my event detail Kaizen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
});

export default SatisfactionSurveyScreen;