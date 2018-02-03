import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
     // navigate is a function to navigate
     // you can use it to navigate by giving the
     // key of the screen defined in the app.js
     return {
       headerTitle: 'Review Jobs',
       headerRight: (
          <Button
            title = "Settings"
            onPress={() => navigation.navigate('settings')}
            backgroundColor = "rgba(0,0,0,0)"
            color = "rgba(0, 125, 125, 1)"
          />
        ),
        style: {
          marginTop: Platform.os === 'android' ? 24:0
        }
      };
    }

  render () {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}

export default ReviewScreen;
