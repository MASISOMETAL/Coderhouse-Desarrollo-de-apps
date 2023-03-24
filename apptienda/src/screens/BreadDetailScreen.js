import { StyleSheet, Text, View } from 'react-native'
import { BREADS } from '../data/breads'

const BreadDetailScreen = ({ route }) => {
  const bread = route.params.bread

  return (
    <View style={styles.container}>
      <Text style={styles.title} > {bread.name} </Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
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


export default BreadDetailScreen