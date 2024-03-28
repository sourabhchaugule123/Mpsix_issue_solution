import React from 'react'
import {view , Text, Touchable, TouchableOpacity } from 'react-native' 
import Color from '../../Utils/Color' ;
import { useAuth } from '@clerk/clerk-expo';
import * as WebBrowser from "expo-web-browser"
WebBrowser.maybeCompleteAuthSession();
 

const Login = () => {
    useWarmUpBrowser();     
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
     const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <div> 
        <view>
            <Text> 
                Login Screen
            </Text> 
            <Image source = {require('../../../assets/MP_CAR_image.png')} 
            styles = {styles.loginImage}
            />
        </view> 
        <view style={styles.subContainer} >
            <Text style={{fontSize:30 , color:"#714"}}>
                Have a safe place to park your Families Favourite Car 
            </Text> 
            <Text style={{fontSize:30 , color:"#874" , textAlign: "center"}}> 
                We provide you the best place to Park Your car safely and with zero worries !!!
            </Text> 
            <view>
                <Text>
                    Lets go !!!
                </Text>
            </view> 
            <TouchableOpacity styple = {styles.button} onPress={onPress}>
            <Text style ={{textAlign: 'center' , fontSize: 15, color:Color}} >
                Lets get started
            </Text>
            </TouchableOpacity>
        </view>
      
    </div>
  )
}

export default Login


const styles = StyleSheet.create({
  loginImage:{
    width : 230 ,
    height : 500,
    marginTop : 70 ,
    borderWidth : 7,
    borderColor : Color,
    borderRadius : 15
  },            
  subContainer:
  {
    width: '100%',
    backgroundColor : "#123", 
    height: '70%',
    marginTop : -20,
  },
button:{
padding: 37,
backgroundColor:"White",
borderRadius : 96,
marginTop: 52
}
})
