import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './source/store/store'
import Home from './source/Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Track from './source/Screens/Track'
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    // AIzaSyAiv1n24J09PC8BpIyafHd6NGpOBpbCous => for directoions
    // AIzaSyCeUKV7XtAZmmaPakITRpz4IG61Ci8qjZU => for places
    <>
      <Provider store={store}>
        <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Track' component={Track}/>
         </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
export default App