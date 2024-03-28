import React from 'react'
import {view,Text} from 'react-native' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import RenterScreen from '../Screen/RenterScreen/RenterScreen'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Color from '../Utils/Color';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator >
        <Tab.Screen name = 'home' component ={Homescreen} 
        options={{
            tabBarLabel:({color}) =>(
            <Text style={{color:Color}}>
                Home
            </Text> 
            ),
            tabBarIcon:({size}) =>
            (
                <FontAwesome name="home" size={size} color="black" />
            )
        }}
        />
        <Tab.Screen name = 'Booking' component={BookingScreen} 
        options={{
            tabBarLabel:({color}) =>(
            <Text style={{color:Color}}>
                Adding
            </Text> 
            ),
            tabBarIcon:() =>
            (
                <FontAwesome name="map-marker" size={24} color="black" /> 
            )
        }}
        />
        <Tab.Screen name = 'Renter' component={RenterScreen} 
        options={{
            tabBarLabel:({color}) =>(
            <Text style={{color:Color}}>
                Renter 
            </Text> 
            ),
            tabBarIcon:({size}) =>
            (
                <FontAwesome name="car" size={24} color="black" />
            )
        }}
        /> 
         <Tab.Screen name = 'profile' component={ProfileScreen} 
        options={{
            tabBarLabel:({color}) =>(
            <Text style={{color:Color}}>
                Profile 
            </Text> 
            ),
            tabBarIcon:() =>
            (
                <FontAwesome name="user" size={24} color="black" /> 
            )
        }}
        />
    </Tab.Navigator> 
  )
}

export default TabNavigation          