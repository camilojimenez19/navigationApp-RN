import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuSidebar } from './src/navigator/MenuSidebar';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <Tabs /> */}
        <MenuSidebar />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;
