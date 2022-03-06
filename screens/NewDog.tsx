import { useDatabaseConnection } from '@/data/connection';
import { useState } from 'react';
import {ScrollView, StyleSheet} from 'react-native'
import { Button, TextInput,RadioButton, Switch } from 'react-native-paper'

import {Text, View} from '../components/Themed'

const fakeDog = {
  name: 'Lola',
  age: '2',
  gender: 'female',
  sterilized: true,
  priceFullDay: '20',
  priceHalfDay: '15',
  priceWalk: '10',

}

export default function NewDog() {
  const { dogsRepository } = useDatabaseConnection();
  const [dog, setDog] = useState(fakeDog)
//   const [dog, setDog] = useState({
//     name: '',
//     age: '',
//     gender: 'male',
//     sterilized: false,
//     priceFullDay: '',
//     priceHalfDay: '',
//     priceWalk: '',
// })

const handleChange = (newValue: string, prop: any) => 
  setDog({
      ...dog,
      [prop] : newValue
  });

  const priceWithCurrency = (price: string) => price + '$'; 

  function submitDog() {
    dogsRepository.create({
      name: dog.name, 
      age: dog.age,
      gender: dog.gender,
      sterilized: dog.sterilized,
      priceFullDay: dog.priceFullDay,
      priceHalfDay: dog.priceHalfDay,
      priceWalk: dog.priceWalk,
    });
  }
  
  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Name"
        value={dog.name}
        onChangeText={(newName) => handleChange(newName, 'name')}
        style={styles.input}
        autoComplete={false}
      />
      <TextInput
        label="Age"
        value={dog.age}
        onChangeText={(newAge) => handleChange(newAge, 'age')}
        style={styles.input}
        autoComplete={false}
      />
      <RadioButton.Group onValueChange={(gender: string) => handleChange(gender, 'gender')} value={dog.gender}>
        <RadioButton.Item label="Male" value="male" />
        <RadioButton.Item label="Female" value="female" />
      </RadioButton.Group>
      <View style={styles.row}> 
        <Text> Sterilized </Text>
        <Switch
          value={dog.sterilized}
          onValueChange={(newSterilized: any) => handleChange(newSterilized, 'sterilized')}
        />        
      </View>
      <TextInput
        label="Full day price"
        placeholder={priceWithCurrency('18')}
        value={priceWithCurrency(dog.priceFullDay)}
        onChangeText={(newPriceFullDay) => handleChange(newPriceFullDay, 'priceFullDay')}
        style={styles.input}
        autoComplete={false}
      />
      <TextInput
        label="Half day price"
        placeholder={priceWithCurrency('12')}
        value={priceWithCurrency(dog.priceHalfDay)}
        onChangeText={(priceHalfDay) => handleChange(priceHalfDay, 'priceHalfDay')}
        style={styles.input}
        autoComplete={false}
      />
      <TextInput
        label="Walk price"
        placeholder={priceWithCurrency('8')}
        value={priceWithCurrency(dog.priceWalk)}
        onChangeText={(priceWalk) => handleChange(priceWalk, 'priceWalk')}
        style={styles.input}
        autoComplete={false}
      />
      <Button mode="outlined" onPress={submitDog}>
        Save
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 8,
  }, 
  row: {
    // flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})
