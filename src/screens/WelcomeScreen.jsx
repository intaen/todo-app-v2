// WelcomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Login')
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Google!</Text>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
}
