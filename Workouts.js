import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const rows = [
  {id: '0', title: 'Day 1'},
  {id: '1', title: 'Day 2'},
  {id: '2', title: 'Day 3'},
  {id: '3', title: 'Day 4'},
  {id: '4', title: 'Day 5'},
]

class WorkoutItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.row}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Workouts extends Component {

  _renderItem = ({item}) => (
    <WorkoutItem
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.title}
    />
  );

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    console.log(id)
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 20,
    marginBottom: 1,
    backgroundColor: 'skyblue'
  },
});
