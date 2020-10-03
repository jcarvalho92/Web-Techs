import React from 'react';
import {View, Text, TextInput, Button, Switch, StyleSheet} from 'react-native';

export default function BasicAppLab2() {
  const [value, onChangeText] = React.useState('placeholder');
  const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={isEnabled ? styles.container : styles.containerDark}>
      <TextInput
        style={isEnabled ? styles.edit : styles.editDark}
        onChangeText={(text) => onChangeText(text)}
        vale={value}
      />
      <Button title="Clear" onPress={() => onChangeText(' ')} />
      <Text style={isEnabled ? styles.title : styles.titleDark}>{value}</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  containerDark: {
    flex: 1,
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
  },
  edit: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 2,
    width: '95%',
  },
  editDark: {
    borderColor: 'white',
    color: 'white',
    borderWidth: 2,
    width: '95%',
  },
  title: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleDark: {
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
