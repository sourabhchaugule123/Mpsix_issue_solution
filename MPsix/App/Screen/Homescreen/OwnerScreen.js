import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function OwnerScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hi Owner!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} color="green" />
    </View>
  );
}

export default OwnerScreen;