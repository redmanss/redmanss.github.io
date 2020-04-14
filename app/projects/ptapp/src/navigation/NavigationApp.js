import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'
import { THEME } from '../theme' 

const Stack = createStackNavigator();

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={HomeScreen} 
                options={
                    {
                        title: 'Home Screen',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: THEME.BG_COLOR
                        },
                        headerTintColor: THEME.WHITE_COLOR
                    }
                }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}