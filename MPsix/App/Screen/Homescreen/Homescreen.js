import { View , Text , Button} from 'react-native'                 
import { NavigationContainer } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';

import React from 'react'

function Homescreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginTop: 20 }}>
        <Button title="Owner" onPress={() => navigation.navigate('Owner')} color="green" />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Renter" onPress={() => navigation.navigate('Renter')} color="green" />
      </View>
    </View>
  );
}

export default Homescreen
