/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

const rows = [
  {id: 0, text: 'Day 1'},
  {id: 1, text: 'Day 2'},
  {id: 2, text: 'Day 3'},
  {id: 3, text: 'Day 4'},
  {id: 4, text: 'Day 5'}
]

const extractKey = ({id}) => id

export default class App extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
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
