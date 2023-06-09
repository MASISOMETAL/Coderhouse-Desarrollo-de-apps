import { CATEGORIES } from '../data/categories'
import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'

const CategoriesScreen = ({ navigation }) => {

  const handleSelectedCategory = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.title,
    })
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  )

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen