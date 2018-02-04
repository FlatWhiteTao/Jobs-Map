import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderSlide() {
    return this.props.data.map((slide) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle,{backgroundColor: slide.color}]}
        >
          <Text style={styles.textStyle}> {slide.text} </Text>
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
        pagingEnabled
      >
        {this.renderSlide()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  }
};
export default Slides;
