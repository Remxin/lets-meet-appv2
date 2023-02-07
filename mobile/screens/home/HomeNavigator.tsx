import { View, Text } from 'react-native'
import React from 'react'

// screens
import Events from './Events';
import AddEvent from './AddEvent';
import Chats from './Chats';

import ProfileNavigator from './profile/ProfileNavigator';

// navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const HomeTab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (


    <HomeTab.Navigator>
      <HomeTab.Screen name="Events" component={Events}/>
      <HomeTab.Screen name="Add Event" component={AddEvent}/>
      <HomeTab.Screen name="Chats" component={Chats}/>
      <HomeTab.Screen name="Profile Navigator" component={ProfileNavigator}/>
    </HomeTab.Navigator>
  

  )
}

export default HomeNavigator