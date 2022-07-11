import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuSidebar = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <ContentMenu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false, // Oculta la hamburguesa
      }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

/** Organizando el menu lateral */
const ContentMenu = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* Avatar */}
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Options menu */}

      <View style={ styles.menuContainer }>
          <TouchableOpacity
            style={ styles.menuBottom }
            onPress={() => navigation.navigate('Tabs') }
          >
            <Text><Icon name="list-outline" size={25} /></Text>
            <Text style={ styles.menuText }>Tabs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.menuBottom }
            onPress={() => navigation.navigate('SettingsScreen') }
          >
            <Text><Icon name="settings-outline" size={25} /></Text>
            <Text style={ styles.menuText }>Settings</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
