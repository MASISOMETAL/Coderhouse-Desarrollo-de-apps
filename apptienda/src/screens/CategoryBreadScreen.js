import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>CategoryBreadScreen</Text>
      <Button title='Ir al detalle' onPress={() => navigation.navigate('Detail')} />
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


export default CategoryBreadScreen;