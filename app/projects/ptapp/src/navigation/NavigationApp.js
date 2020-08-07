import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from "../screens/LoginScreen"
import { HomeScreen } from '../screens/HomeScreen'



const Stack = createStackNavigator();

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                headerMode="none"
                name="Login"
                component={LoginScreen} 
                />
                <Stack.Screen
                name="Home"
                component={HomeScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
