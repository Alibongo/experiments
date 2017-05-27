import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

import Camera from 'react-native-snap-camera';
import Emoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';

// react component
export default class App extends React.Component {
  state = {
    textIsVisible: false,
    emojiIsVisible: false

  }
  // call Emoji
  changeEmojiState() {
    this.setState({
      emojiIsVisible: !this.state.emojiIsVisible
    })
  }
  // call Text
  changeTextState() {
    this.setState({
      textIsVisible: !this.state.textIsVisible
    })
  }

  // view is expressed as JSX
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>chatchat</Text>
          <Text style={styles.button} onPress={this.changeEmojiState.bind(this)}>
            Emoji
          </Text>

          <Text style={styles.button} onPress={this.changeTextState.bind(this)}>
            SnapText
          </Text>
        </View>
        <Emoji isVisible={this.state.emojiIsVisible}>

          <SnapText isVisible={this.state.textIsVisible}>
            <Camera type="front"/>
          </SnapText>
        </Emoji>
      </View>
    );
  }
}
// STYLES
const styles = StyleSheet.create({
  button: {
    color: 'blue',
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#bada55',
    height: 80,
    padding: 24

  },

  title: {
    fontSize: 30,
    color: 'green'
  }
});
