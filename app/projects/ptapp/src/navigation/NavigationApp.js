import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen'
import { THEME } from '../theme' 

const Stack = createStackNavigator();

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={LoginScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
