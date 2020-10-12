import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
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
import { DetailScreen } from '../screens/DetailScreen'

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
const DetailScreenStack = createStackNavigator()
const SearchStack = createStackNavigator()
const TabNavigation = createBottomTabNavigator()

function MainStackScreen() {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerStatusBarHeight: 40,
                headerTransparent: true,
                headerTintColor: '#333',
                headerTitleStyle: { 
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 18
                },
                headerTitleAlign: 'center',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <MainStack.Screen name='HomeStack' component={HomeScreen} options={{ title: 'Головна', headerShown: false}}/>
            <MainStack.Screen name='SpecialEquipmentStack' component={SpecialEquipment} options={{ title: 'Спецтехніка'}} />
            <MainStack.Screen name='TelehandlersStack' component={Telehandlers} options={{ title: 'Телескопічні навантажувачі'}} />
            <MainStack.Screen name='ExcavatorsStack' component={Excavators} options={{ title: 'Екскаватори'}} />
            <MainStack.Screen name='LiftsStack' component={Lifts} options={{ title: 'Підіймачі'}} />
            <MainStack.Screen name='ForkliftsStack' component={Forklifts} options={{ title: 'Вилкові навантажувачі'}} />
            <MainStack.Screen name='OtherTechStack' component={OtherTech} options={{ title: 'Інша техніка'}} />
            <MainStack.Screen name='AgroTechStack' component={AgroTech} options={{ title: 'Агротехніка'}} />
            <MainStack.Screen name='RoadTechStack' component={RoadTech} options={{ title: 'Дорожно-будівельна техніка'}} />
            <MainStack.Screen name='CarsStack' component={Cars} options={{ title: 'Автомобілі та причепи'}} />
            <MainStack.Screen name='DetailScreenStack' component={DetailScreen} />
        </MainStack.Navigator>
    )
}

function SearchStackSreen() {
    return (
        <SearchStack.Navigator
        screenOptions={{
            headerStatusBarHeight: 40,
            headerTransparent: true,
            headerTintColor: '#333',
            headerTitleStyle: { 
                fontFamily: 'OpenSans-Bold',
                fontSize: 18
            },
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
            <SearchStack.Screen name='SearchStack' component={SearchScreen} options={{
                headerShown: false
            }}/>
            <SearchStack.Screen name='DetailScreenStack' component={DetailScreen} />
        </SearchStack.Navigator>
    )
}

export const NavigationApp = () => {
    return (
        <NavigationContainer>
            <TabNavigation.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = 'md-home'
                      } else if (route.name === 'Search') {
                        iconName = 'md-search'
                      }

                      return <Ionicons name={iconName} size={22} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#009fe3',
                    inactiveTintColor: '#737c8b',
                    labelStyle: {
                        fontFamily: 'OpenSans-Bold',
                        fontSize: 10,
                        paddingBottom: 8
                    },
                    style: {
                        height: 55,
                    }
                  }}
            >
                <TabNavigation.Screen name='Home' component={MainStackScreen} options={{ title: 'Головна'}}/>
                <TabNavigation.Screen name='Search' component={SearchStackSreen} options={{ title: 'Пошук'}}/>
            </TabNavigation.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 15
    },
})
