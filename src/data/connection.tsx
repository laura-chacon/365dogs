import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ActivityIndicator } from 'react-native';
import { Connection, createConnection } from 'typeorm';
import { BookingModel } from '@/data/entities/BookingModel';
import { DogModel } from '@/data/entities/DogModel';
import { ImageModel } from '@/data/entities/ImageModel';
import { UserModel } from '@/data/entities/UserModel';

import { CreateDogsTable1644686904064 } from './migrations/1644686904064-CreateDogsTable';
import { DogsRepository } from '@/data/repositories/DogsRepository'

interface DatabaseConnectionContextData {
  dogsRepository: DogsRepository;
}

const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData,
);

export const DatabaseConnectionProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState<Connection | null>(null);

  const connect = useCallback(async () => {
    const createdConnection = await createConnection({
      type: 'expo',
      database: 'dogs365.db',
      driver: require('expo-sqlite'),
      entities: [BookingModel, DogModel, ImageModel, UserModel],

      migrations: [CreateDogsTable1644686904064],
      migrationsRun: true,

      synchronize: false,
    });

    setConnection(createdConnection);
  }, []);

  useEffect(() => {
    if (!connection) {
      connect();
    }
  }, [connect, connection]);

  if (!connection) {
    return <ActivityIndicator />;
  }

  return (
    <DatabaseConnectionContext.Provider
      value={{
        dogsRepository: new DogsRepository(connection),
      }}
    >
      {children}
    </DatabaseConnectionContext.Provider>
  );
};

export function useDatabaseConnection() {
  return useContext(DatabaseConnectionContext);
}