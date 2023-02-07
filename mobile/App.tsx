/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

// --- redux ---
import { configureStore } from "@reduxjs/toolkit"
import { Provider as ReduxProvider } from 'react-redux';
import userReducer from "./features/user"

const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

// --- screens ---
import LoadingScreen from './screens/LoadingScreen';

// --- navigators ---
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './screens/home/HomeNavigator';
import AuthNavigator from './screens/auth/AuthNavigator';
const RootTab = createStackNavigator()



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <RootTab.Navigator>
          <RootTab.Screen name="Loading" component={LoadingScreen}/>
          <RootTab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }}/>
          <RootTab.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }}/>
          
        </RootTab.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}


export default App;
