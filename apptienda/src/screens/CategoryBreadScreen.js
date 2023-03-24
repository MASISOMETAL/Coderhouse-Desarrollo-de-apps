import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { BREADS } from '../data/breads.js'
import BreadItem from '../components/BreadItem'

const CategoryBreadScreen = ({ navigation, route }) => {

  const breads = BREADS.filter(bread => bread.category === route.params.categoryID)

  const handleSelected = (item) => {
    navigation.navigate('Detail', {
      bread: item,
      name: item.name
    })
  }

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default CategoryBreadScreen