import {View , Text , Image} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => { 
    const {user , isloading} = useUser();
  return user&& (
    <View style = {styles.container}>
         <View>
            <Image source={{uri:user?.imageUrl}} style={styles.userImage} />
         </View> 
         <View> 
            <Text>
                Welcome
            </Text> 
            <Text>
                {user?.fullName}
            </Text> 
         </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({  
    container : {
             padding : 21 ,
             paddingTop : 42 ,
             backgroundColor : "purple"
    } , 
userImage : {
    width : 49 ,
    height : 49 ,
    borderRadius : 99 ,
    borderBottomLeftRadius : 25 ,
    borderBottomRightRadius : 25
}

})