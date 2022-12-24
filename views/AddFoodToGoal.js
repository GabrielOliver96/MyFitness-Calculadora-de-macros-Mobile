import React from 'react';
import { Text, ProgressBarAndroid, View, TouchableOpacity, ScrollView  } from 'react-native';
import { css } from '../src/css.js';

export default function App(props) {

  return (
    <View style={css.container}>

        <ScrollView>

            <View style={css.containerLogo}>
                <Text style={css.logo}>MyFitness</Text>
            </View>

            <View style={css.containerForm}>

                <Text style={ css.textTitle } >Alimentos</Text>

                <Text style={ css.text } >
                    Adicione alimentos para sua meta do dia.
                </Text>

                <Text style={ css.text } >Consumo do dia</Text>

            </View>

        </ScrollView >
      
    </View>
  );
}


