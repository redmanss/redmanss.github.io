import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { CatalogScreen } from '../screens/CatalogScreen'
import { CataloglistScreen } from '../screens/CataloglistScreen'
import { DetailsScreen } from '../screens/DetailsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SearchScreen } from '../screens/SearchScreen'



const MainStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const SearchStack = createStackNavigator()
const TabNavigation = createBottomTabNavigator()

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name='HomeStack' component={HomeScreen} />
            <MainStack.Screen name='CatalogStack' component={CatalogScreen} />
            <MainStack.Screen name='CataloglistStack' component={CataloglistScreen} />
            <MainStack.Screen name='DetailsStack' component={DetailsScreen} />
        </MainStack.Navigator>
    )
}

function ProfileStackSreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='ProfileStack' component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

function SearchStackSreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name='SearchStack' component={SearchScreen} />
        </SearchStack.Navigator>
    )
}

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <TabNavigation.Navigator>
                <TabNavigation.Screen name='Home' component={MainStackScreen} options={{ title: 'Головна'}}/>
                <TabNavigation.Screen name='Profile' component={ProfileStackSreen} options={{ title: 'Профіль'}}/>
                <TabNavigation.Screen name='Search' component={SearchStackSreen} options={{ title: 'Пошук'}}/>
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}
