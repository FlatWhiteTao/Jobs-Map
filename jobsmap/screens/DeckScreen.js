import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView} from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job) {
      return (
        <Card title={job.title}>
          <View style={styles.detailWrapper}>
            <Text>{job.company}</Text>
            <Text>{job.formattedRelativeTime}</Text>
          </View>
          <Text>
            {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
          </Text>
        </Card>
      );
  }

  renderNoMoreCards() {
    return (
      <Card title='No More'>
      </Card>
    );
  }

  render () {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          render={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  }
};

function mapStateToProps(state) {
  // left side is props, right hand side is the state in reducer
  return { jobs: state.jobs.result };
}
export default connect(mapStateToProps)(DeckScreen);
