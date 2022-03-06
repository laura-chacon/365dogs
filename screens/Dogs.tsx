import { useDatabaseConnection } from '@/data/connection';
import { DogModel } from '@/data/entities/DogModel';
import { useEffect, useState } from 'react';
import {StyleSheet} from 'react-native'
import { List } from 'react-native-paper'

import {View} from '../components/Themed'

export default function Dogs() {
  const { dogsRepository } = useDatabaseConnection();
  const [dogs, setDogs] = useState<DogModel[]>([]);

  useEffect(() => {
    dogsRepository.getAll().then(setDogs);
  }, []);

  return (
    <View style={styles.container}>
      {dogs.length > 0 && <List.Section>
        {dogs.map(dog => 
          <List.Item 
            title={dog.name} 
            left={() => <List.Icon icon="dog" />} 
            right={() => <List.Icon icon="information-outline" />} 
            onPress={() => {}}/>
        )}
      </List.Section>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
