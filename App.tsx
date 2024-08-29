/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello There</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
