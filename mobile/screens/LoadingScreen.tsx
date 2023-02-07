import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

// @ts-ignore
const LoadingScreen = ({ navigation }) => {
    // const navigation = useNavigation()

    useEffect(() => {
      setTimeout(() => {
          navigation.navigate("Auth")
        }, 300)
    }, [])

  return (
    <View>
      <Text>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen