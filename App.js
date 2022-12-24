import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Register, Login, MyGoals, SettingGoal, AddFoodToGoal, AddFood, AllMyFoods} from './views';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="MyGoals" component={MyGoals} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingGoal" component={SettingGoal} options={{ headerShown: false }}/>
        <Stack.Screen name="AddFoodToGoal" component={AddFoodToGoal} options={{ headerShown: false }}/>
        <Stack.Screen name="AddFood" component={AddFood} options={{ headerShown: false }}/>
        <Stack.Screen name="AllMyFoods" component={AllMyFoods} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2780D8',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
