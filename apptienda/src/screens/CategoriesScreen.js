import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button title='Ir a Productos' onPress={() => navigation.navigate("Bread")} />
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


export default CategoriesScreen;