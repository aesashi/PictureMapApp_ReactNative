import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import Map from './screens/Map';

import IconButton from './components/UI/IconButton';
import { Colors } from './constants/Colors';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState();

  useEffect(() => {
    init().then(()=> {
      setDbInitialized(true);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  if(dbInitialized){
    SplashScreen.preventAutoHideAsync();
  }

  return (
      <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={ ({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) =>
              <IconButton
                icon="add"
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            })}
          />
          <Stack.Screen
            name='AddPlace'
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
           />
          <Stack.Screen
            name='Map'
            component={Map}
            options={{
              title: 'Map',
            }}
           />
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
