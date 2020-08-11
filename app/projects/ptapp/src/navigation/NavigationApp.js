import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LoginScreen } from '../screens/LoginScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { CatalogScreen } from '../screens/CatalogScreen'
import { CataloglistScreen } from '../screens/CataloglistScreen'
import { DetailsScreen } from '../screens/DetailsScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { SearchScreen } from '../screens/SearchScreen'



const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const SearchStack = createStackNavigator()
const TabNavigation = createBottomTabNavigator()

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeStack' component={HomeScreen} />
            <HomeStack.Screen name='CatalogStack' component={CatalogScreen} />
            <HomeStack.Screen name='CataloglistStack' component={CataloglistScreen} />
            <HomeStack.Screen name='DetailsStack' component={DetailsScreen} />
        </HomeStack.Navigator>
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
                <TabNavigation.Screen name='Home' component={HomeStackScreen} options={{ title: 'Головна'}}/>
                <TabNavigation.Screen name='Profile' component={ProfileStackSreen} options={{ title: 'Профіль'}}/>
                <TabNavigation.Screen name='Search' component={SearchStackSreen} options={{ title: 'Пошук'}}/>
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}
