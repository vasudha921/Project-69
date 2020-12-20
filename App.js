import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <AppHeader/>
      <ScanScreen/>
      
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
