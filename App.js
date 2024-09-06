import { Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.defaulText}>Hello World</Text>
      <Text style={styles.defaulText}>This is another piece of code!</Text>
      <Button title='submit'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaulText: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red', 
    borderRadius: 5,
    padding: 12,
  }
});
