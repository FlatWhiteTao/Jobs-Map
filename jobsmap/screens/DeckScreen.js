import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  render () {
    return (
      <View>
        <Text> DeckScreen </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  // left side is props, right hand side is the state in reducer
  return { jobs: state.jobs.result };
}
export default connect(mapStateToProps)(DeckScreen);
