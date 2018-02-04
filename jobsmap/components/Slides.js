import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return(
        <Button
          title="Onwards"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlide() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle,{backgroundColor: slide.color}]}
        >
          <Text style={styles.textStyle}> {slide.text} </Text>
          {this.renderLastSlide(index)}
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
  },
  buttonStyle: {
    backgroundColor: '#03A9F4',
    marginTop: 15
  }
};
export default Slides;
