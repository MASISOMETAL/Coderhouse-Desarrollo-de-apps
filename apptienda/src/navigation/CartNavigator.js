import { Platform, StyleSheet, Text, View } from 'react-native'

import {COLORS} from '../constants/colors.js'
import CartScreen from '../screens/CartScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
        >
            <Stack.Screen
                name='Cart'
                component={CartScreen}
                options={{ title: 'Carrito' }}
            ></Stack.Screen>
        </Stack.Navigator>
  )
}

export default CartNavigator

const styles = StyleSheet.create({})