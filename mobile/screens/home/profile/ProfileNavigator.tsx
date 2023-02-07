import { View, Text } from 'react-native'
import React from 'react'

// screens
import Profile from './Profile'
import Preferences from './Preferences'
import ChangeDetails from './ChangeDetails'

// navigator
import { createStackNavigator } from '@react-navigation/stack'
const ProfileNav = createStackNavigator()

const ProfileNavigator = () => {
  return (
    <ProfileNav.Navigator>
        <ProfileNav.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <ProfileNav.Screen name="Preferences" component={Preferences}/>
        <ProfileNav.Screen name="Change Details" component={ChangeDetails}/>
    </ProfileNav.Navigator>
  )
}

export default ProfileNavigator