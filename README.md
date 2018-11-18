https://docs.google.com/presentation/d/1kOA1Vqf6q1wdSiN-IgthxzOCuz4MaLXI9R8SroICUI4/edit#slide=id.g44bdcf65ab_0_38

1. Import AsyncStorage:

```javascript
import { AsyncStorage } from "react-native";
```

2. Add a new key/value to the state:

```javascript
this.state = {
  saved: null,
  unsaved: null
};
```

3. Set the value of the TextInput to be `this.state.unsaved` And add an onChangeText to handle the changes:

```javascript
<TextInput
  placeholder="Enter value"
  style={styles.input}
  value={this.state.unsaved}
  onChangeText={value => this.setState({ unsaved: value })}
/>
```

4. Create a function to handle Pressing on the TouchableHighlight(first TouchableHighlight):
   if there is a value in this.state.unsaved it will save the new value
   if there isnt a value it will remove the item

```javascript
handlePress() {
if (this.state.unsaved) {
    AsyncStorage.setItem("saved", this.state.unsaved);
} else {
    AsyncStorage.removeItem("saved");
}
this.setState({ saved: this.state.unsaved, unsaved: null });
}
```

5. Add onPress to TouchableHighlight (first TouchableHighlight):

```javascript
<TouchableHighlight
    onPress={() => this.handlePress()}
    style={styles.button}
>
```

6. Add a ComponentDidMount to grab the saved value each time the application loads:

```javascript
componentDidMount() {
    AsyncStorage.getItem("saved").then(value => {
        if (value) {
            this.setState({ saved: value });
        }
    });
}
```

7. If you type something then click on the first button then reload the application it will appear

8. Change the color of the 2nd TouchableHighlight depending on if there is a value saved or not

```javascript
<TouchableHighlight
    style={{
    ...styles.button,
    backgroundColor: this.state.saved ? "red" : "green"
    }}
>
```
