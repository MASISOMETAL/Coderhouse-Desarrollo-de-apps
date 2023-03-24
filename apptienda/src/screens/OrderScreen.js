import { FlatList, StyleSheet, View } from 'react-native'

import OrderItem from '../components/OrderItem'
import React from 'react'

const OrderScreen = () => {

    const renderCardItem = (itemData) => (
        <OrderItem
            item={itemData.item}
            onDelete={onHandlerDeleteItem}
        />
    )

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCardItem}
        numColumns={1} />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})