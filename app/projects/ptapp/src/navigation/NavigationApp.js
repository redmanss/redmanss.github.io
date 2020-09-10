import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'
import { SpecialEquipment } from '../screens/SpecialEquipment'
import { Telehandlers } from '../screens/Telehandlers'
import { Excavators } from '../screens/Excavators'
import { Lifts } from '../screens/Lifts'
import { Forklifts } from '../screens/Forklifts'
import { OtherTech } from '../screens/OtherTech'
import { AgroTech } from '../screens/AgroTech'
import { RoadTech } from '../screens/RoadTech'
import { Cars } from '../screens/Cars'
import { SearchScreen } from '../screens/SearchScreen'

// SpecialEquipment Telehandlers Excavators Lifts Forklifts OtherTech AgroTech RoadTech Cars
const MainStack = createStackNavigator()
const SpecialEquipmentStack = createStackNavigator()
const TelehandlersStack = createStackNavigator()
const ExcavatorsStack = createStackNavigator()
const LiftsStack = createStackNavigator()
const ForkliftsStack = createStackNavigator()
const OtherTechStack = createStackNavigator()
const AgroTechStack = createStackNavigator()
const RoadTechStack = createStackNavigator()
const CarsStack = createStackNavigator()
const SearchStack = createStackNavigator()
const TabNavigation = createBottomTabNavigator()

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name='HomeStack' component={HomeScreen} />
            <MainStack.Screen name='SpecialEquipmentStack' component={SpecialEquipment} />
            <MainStack.Screen name='TelehandlersStack' component={Telehandlers} />
            <MainStack.Screen name='ExcavatorsStack' component={Excavators} />
            <MainStack.Screen name='LiftsStack' component={Lifts} />
            <MainStack.Screen name='ForkliftsStack' component={Forklifts} />
            <MainStack.Screen name='OtherTechStack' component={OtherTech} />
            <MainStack.Screen name='AgroTechStack' component={AgroTech} />
            <MainStack.Screen name='RoadTechStack' component={RoadTech} />
            <MainStack.Screen name='CarsStack' component={Cars} />
        </MainStack.Navigator>
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
                <TabNavigation.Screen name='Search' component={SearchStackSreen} options={{ title: 'Пошук'}}/>
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}
