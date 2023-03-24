import { StyleSheet, Text, View } from 'react-native'

import CartNavigator from './CartNavigator'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import ShopNavigator from './ShopNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
        initialRouteName='Shop'
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <BottomTabs.Screen
            name='ShopTab'
            component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name='md-home' size={24} color='black' />
                        <Text>Tienda</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen
        name='CartTab'
        component={CartNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name='md-cart' size={24} color='black' />
                    <Text>Carrito</Text>
                </View>
            )
        }}
        />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})