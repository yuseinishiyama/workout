import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const rows = [
  {id: '0', title: 'Routine 1'},
  {id: '1', title: 'Routine 2'},
  {id: '2', title: 'Routine 3'},
  {id: '3', title: 'Routine 4'},
  {id: '4', title: 'Routine 5'},
]

class RoutineItem extends React.PureComponent {

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

export default class Routine extends Component {

  _renderItem = ({item}) => (
    <RoutineItem
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
