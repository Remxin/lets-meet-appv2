import { View, Text } from 'react-native'
import React from 'react'

// screens
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

// navigator
import { createStackNavigator } from '@react-navigation/stack'
const AuthNav = createStackNavigator()


const AuthNavigator = () => {
  return (
    <AuthNav.Navigator>
      <AuthNav.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <AuthNav.Screen name="Register" component={Register} />
      <AuthNav.Screen name="Forgot Password" component={ForgotPassword} />
      <AuthNav.Screen name="Reset Password" component={ResetPassword} />
    </AuthNav.Navigator>
  )
}

export default AuthNavigator