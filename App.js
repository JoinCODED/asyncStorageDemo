import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unsaved: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Saved Value:</Text>
        <Text>{this.state.saved}</Text>
        <TextInput placeholder="Enter value" style={styles.input} />
        <TouchableHighlight style={styles.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            ...styles.button,
            backgroundColor: "red"
          }}
        >
          <Text>Special Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 180,
    height: 20,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold"
  },
  button: {
    width: 70,
    height: 50,
    backgroundColor: "skyblue",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});
