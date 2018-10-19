import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import timezones from './timezones';

const doNothing = () => {};

export default class App extends Component<{}> {
  render() {
    const items = Object.entries(timezones).map(([key, value]) => ({
      key,
      label: value,
    }));
    return (
      // uncommend SafeArea and things work again!
      // <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyboardShouldPersistTaps="always"
        renderItem={this.renderRow}
        style={{ flex: 1 }}
        ItemSeparatorComponent={Separator}
        initialNumToRender={20}
      />
      // </SafeAreaView>
    );
  }
  renderRow = ({ item }) => {
    return (
      <TouchableHighlight style={styles.itemHeight} onPress={doNothing}>
        <Text>{item.label}</Text>
      </TouchableHighlight>
    );
  };
}
const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  itemHeight: {
    height: 60,
    justifyContent: 'center',
  },
  separator: {
    height: 5,
    backgroundColor: 'grey',
  },
});
