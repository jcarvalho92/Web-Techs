import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Switch,
  TextInput,
  Text,
  Image,
} from 'react-native';

export default function App() {
  const [isMetric, setIsMetric] = useState(true);

  const toggleSwitch = () => setIsMetric((previousState) => !previousState);

  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [resultCategory, setResultCategory] = React.useState('');
  const [resultBMI, setResultBMI] = React.useState(0);

  const calculateMetric = () => {
    const meter = height / 100;

    //weight in kg divided by height in meters multiplied by itself
    const resultBMI = (weight / (meter * meter)).toFixed(1);

    if (isNaN(resultBMI)) {
      setResultBMI(0);
      setResultCategory('');
      return;
    }
    setResultBMI(resultBMI);

    this.defineCategories(resultBMI);
  };

  const calculateImperial = () => {
    //weight in pounds multiplied by 703 divided by height in inches multiplied by itselfß
    const resultBMI = ((weight * 703) / (height * height)).toFixed(1);

    if (isNaN(resultBMI)) {
      setResultBMI(0);
      setResultCategory('');
      return;
    }
    setResultBMI(resultBMI);
    this.defineCategories(resultBMI);
  };
  defineCategories = (bmi) => {
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
      category = 'Obesity';
    } else {
      category = 'Extremely Obesity';
    }

    setResultCategory(category);
  };

  const clearValues = () => {
    setHeight('');
    setWeight('');
    setResultCategory('');
    setResultBMI(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalView}>
        <Text style={styles.title}>Calculator</Text>
        <Image style={styles.imageLogo} source={require('./images/logo.png')} />
      </View>
      <View style={styles.horizontalView}>
        <Text style={styles.textsSwith}>Imperial</Text>
        <Switch onValueChange={toggleSwitch} value={isMetric} />
        <Text style={styles.textsSwith}>Metric</Text>
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.texts}>Height:</Text>
        <TextInput
          style={styles.textsInput}
          keyboardType="numeric"
          onChangeText={(height) => setHeight(height)}
          value={height}
          placeholder={isMetric ? 'cm' : 'inch'}
          maxLength={5}></TextInput>
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.texts}>Weight:</Text>
        <TextInput
          style={styles.textsInput}
          keyboardType="numeric"
          onChangeText={(weight) => setWeight(weight)}
          value={weight}
          placeholder={isMetric ? 'kg' : 'lbs'}
          maxLength={5}></TextInput>
      </View>

      <View style={styles.viewbuttons}>
        <View style={styles.buttons}>
          <Button
            title="Calculate"
            onPress={isMetric ? calculateMetric : calculateImperial}
          />
        </View>
        <View style={styles.buttons}>
          <Button title="Clear" onPress={clearValues} />
        </View>
      </View>

      <Text>Your BMI: {resultBMI}</Text>
      <Text>Your Category: {resultCategory}</Text>

      <View style={styles.bottom}>
        <Image
          style={styles.imageCategories}
          source={require('./images/bmi-categories.jpg')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  viewInput: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Marker Felt',
  },
  texts: {
    fontSize: 15,
    fontWeight: '200',
    padding: 15,
  },
  textsInput: {
    width: 130,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    margin: 10,
  },
  viewbuttons: {
    margin: 10,
    flexDirection: 'row',
  },
  textsSwith: {
    margin: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttons: {
    margin: 15,
    borderRadius: 0.1,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 80,
    height: 80,
  },
  imageCategories: {
    marginTop: 20,
    width: 400,
    height: 200,
  },
});
