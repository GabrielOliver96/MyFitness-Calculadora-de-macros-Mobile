import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { css } from '../src/css.js';

export default function App(props) {

  return (
    <View style={css.container}>
        
        <ScrollView>

            <View style={css.containerLogo}>
                <Text style={css.logo}>MyFitness</Text>
            </View>

            <View style={css.containerForm}>
                <Text style={ css.text }>
                    Minha lista de alimentos
                </Text>
            </View>

        </ScrollView>
      
    </View>
  );
}


