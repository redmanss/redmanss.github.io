import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen } from '../screens/LoginScreen'
import { HomeScreen } from '../screens/HomeScreen'




const HomeStack = createStackNavigator();
//const Tab = createBottomTabNavigator();

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator >
                <HomeStack.Screen
                    headerMode="none"
                    name="Login"
                    component={LoginScreen} 
                />
                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen} 
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}
