import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import Login from './App/Screen/LoginScreen/Login';           
import OwnerScreen from './App/Screen/Homescreen/OwnerScreen';                                                
import RenterScreen from './App/Screen/RenterScreen/RenterScreen';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};



export default function App() {
  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey='pk_test_bm92ZWwtcXVhZ2dhLTQuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>              
    <NavigationContainer>
          {userType === 'owner' ? (
            <OwnerScreen />
          ) : userType === 'renter' ? (
            <RenterScreen />
          ) : (
            <SignedIn>
              <TabNavigation />
            </SignedIn> 
          )}
        </NavigationContainer>      
      <SignedOut>
        <Text>
          You are Signed Out 
        </Text> 
        <Login />
      </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop : 49
  },
});
