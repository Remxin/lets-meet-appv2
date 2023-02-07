import { View, Text, TextInput, NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native'
import { useState } from 'react'

type componentType = {
    validationFunction: (text: string) => boolean
    parentError: string
    hash: boolean
    errorText: string
}

const Input = ({ validationFunction, errorText, parentError }: componentType) => {
    const [error, setError] = useState(parentError)

    function validate(e: NativeSyntheticEvent<TextInputEndEditingEventData>) {
        const { text } = e.nativeEvent

        const valid = validationFunction(text)
        if (!valid) return setError(errorText)
    }

  return (
    <View>
      <TextInput onEndEditing={validate}/>
      <Text>{error}</Text>
    </View>
  )
}

export default Input