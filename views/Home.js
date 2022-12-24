import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { css } from '../src/css.js';

export default function App(props) {

  return (
    <View style={css.container}>

      <View style={css.containerLogo}>

        <Text style={css.logo}>MyFitness</Text>

      </View>

      <View style={css.containerContent}>
        <Text style={css.textBlack}>Organize sua dieta e tenha resultados mais rápido.</Text>

        <TouchableOpacity style={css.btn} onPress={() => props.navigation.navigate('Login')}>
          <Text style={css.textBtn}>Acessar</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}


