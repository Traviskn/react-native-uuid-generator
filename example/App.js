import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import UUIDGenerator from 'react-native-uuid-generator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: ""
    };

    this.generateUUID = this.generateUUID.bind(this);
  }

  componentWillMount() {
    this.generateUUID();
  }

  generateUUID() {
    UUIDGenerator.getRandomUUID().then((uuid) => {
      this.setState({ uuid });
    });

    // Or use the callback interface if you prefer.
    // UUIDGenerator.getRandomUUID((uuid) => {
    //   this.setState({ uuid });
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          A Random UUID:
        </Text>

        <Text style={styles.subtitle}>
          {this.state.uuid}
        </Text>

        <TouchableOpacity onPress={this.generateUUID}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Generate New UUID
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333'
  },
  button: {
    margin: 10,
    padding: 5,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
  }
});

export default App;
