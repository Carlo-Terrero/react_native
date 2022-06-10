import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/home';
import Detail from './src/detail';
import Info from './src/info';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>

      <Stack.Navigator 
        initialRouteName='Home'
        //De esta manera todos los stack.screen tiene el mismo estilo
        /* screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} */
      >

        <Stack.Screen name='Home' component={Home} options={{ title: 'HOTEL MIRANDA' }}/>
        <Stack.Screen name='Detail' component={Detail} options={{ title: 'HOTEL MIRANDA' }}/>
        <Stack.Screen name='Info' component={Info} options={{ title: 'HOTEL MIRANDA' }}/>
      </Stack.Navigator>     

    </NavigationContainer>
  );
}
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
