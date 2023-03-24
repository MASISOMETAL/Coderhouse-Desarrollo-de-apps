import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../data/cart'
import CartItem from '../components/CartItem'
import React from 'react'

const CartScreen = () => {
  const items = CART
  const total = 12000

  const handlerConfirmCart = () => console.log('Confirmar carrito')
  const handleDeleteItem = () => console.log('Eliminar demasiado')

  const renderItem = (data) => {
    <CartItem item={data.item} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})