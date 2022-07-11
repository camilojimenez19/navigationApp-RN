import React  from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator 
      style={{ paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline'
              break;

            case 'ContactScreen':
              iconName = 'people-outline'
              break;

            case 'AlbumsScreen':
              iconName = 'images-outline'
              break;
          }
          return <Text style={{ color }}><Icon name={iconName} size={20} color={color} /></Text>
        },
      })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}
