import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

/** Menu Tabs para Android */
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps-outline'
              break;

            case 'TopTabNavigator':
              iconName = 'book-outline'
              break;

            case 'StackNavigator':
              iconName = 'list-outline'
              break;
          }
          return <Text style={{ color }}><Icon name={iconName} size={20} color={color} /></Text>
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{ title: 'TopTabNavigator' }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}


/** Menu Tabs para IOS */
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white', // cambiar el color del fondo del container
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps-outline'
              break;

            case 'TopTabNavigator':
              iconName = 'book-outline'
              break;

            case 'StackNavigator':
              iconName = 'list-outline'
              break;
          }
          return <Text style={{ color }}><Icon name={iconName} size={20} color={color} /></Text>
        },
      })}
    >
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{ title: 'TopTabNavigator' }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
}
