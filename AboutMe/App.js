import React from 'react';
import {
  View,
  Text
} from 'react-native';


export default function AboutMe() {
  return (
    <View style={
      {flex: 1,
      justifyContent: "center",
      alignItems: "center"
      }
    }>
      <Text>Name: Juliana de Carvalho</Text>
      <Text>Student Id: 301137060</Text>
    </View>
  );
}