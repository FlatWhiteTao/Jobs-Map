import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Slides extends Component {

  renderSlide() {
    return this.props.data.map((slide) => {
      return (
        <View key={slide.text}>
          <Text> {slide.text} </Text>
        </View>
      );
    });
  }
  render() {
    return (
      // using ScrollView and set horizontal prob true
      <ScrollView
        // config of scrollview
        horizontal
        style={{ flex: 1 }}
      >
        {this.renderSlide()}
      </ScrollView>
    );
  }
}

export default Slides;
