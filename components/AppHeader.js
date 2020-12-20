import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>MY BAR-CODE SCANNER</Text>
        <Image
            style={{
              width: 100,
              height: 100,
              marginLeft:100,
              
            }}
            source={require('../assets/camera.png')}
          />
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'pink',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});