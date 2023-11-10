import React, { Component } from 'react'; 
import { StyleSheet, View } from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}/>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet. create({
  container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
  }, 
  
  cardContainer: {
    alignItems: 'center', //new 
    borderColor: 'black', 
    borderwidth: 3, 
    borderStyle: 'solid', 
    borderRadius: 20, 
    backgroundColor: profileCardColor, 
    width: 300, 
    height: 400
  }, 
  cardImageContainer: {
    alignItems: 'center', //new 
    backgroundColor: 'white', 
    borderwidth: 3, 
    borderColor: 'black', 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginTop: 30, //new 
    paddingTop: 15 //new
  },
    cardImage: {
      width: 80, 
      height: 80
    }
  });
  
