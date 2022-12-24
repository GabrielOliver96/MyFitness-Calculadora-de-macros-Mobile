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

                <Text style={ css.textTitle } >Suas metas</Text>

                <Text style={ css.text } >Calorias</Text>
                <Text style={ css.text } >0</Text>
                <Text style={ css.text } >Carboidratos</Text>
                <Text style={ css.text } >0</Text>
                <Text style={ css.text } >Proteínas</Text>
                <Text style={ css.text } >0</Text>
                <Text style={ css.text } >Gorduras</Text>
                <Text style={ css.text } >0</Text>

                <Text style={ css.text } >Você ainda não tem metas estabelidas? Clique no botão abaixo e ajudaremos você a obter o melhor resultado.</Text>

                <TouchableOpacity style={css.btn} onPress={() => props.navigation.navigate('SettingGoal')} >
                    <Text style={css.textBtn}>ESTABELAÇA SUAS METAS</Text>
                </TouchableOpacity>

                <Text style={ css.textTitle } >Resultados do dia</Text>

                <Text style={ css.text } >Até o momento esse foi a sua ingestão de nutrientes.</Text>

                <Text style={ css.text } >Calorias</Text>
                <ProgressBarAndroid style={css.caloriesProgressBar} styleAttr="Horizontal" color="green" indeterminate={false} progress={0}/>
                <Text style={ css.text } >0</Text>

                <Text style={ css.text } >Carboidratos</Text>
                <ProgressBarAndroid style={css.caloriesProgressBar} styleAttr="Horizontal" color="blue" indeterminate={false} progress={0}/>
                <Text style={ css.text } >0</Text>

                <Text style={ css.text } >Proteínas</Text>
                <ProgressBarAndroid style={css.caloriesProgressBar} styleAttr="Horizontal" color="red" indeterminate={false} progress={0}/>
                <Text style={ css.text } >0</Text>

                <Text style={ css.text } >Gorduras</Text>
                <ProgressBarAndroid style={css.caloriesProgressBar} styleAttr="Horizontal" color="yellow" indeterminate={false} progress={0}/>
                <Text style={ css.text } >0</Text>

                <Text style={ css.text } >Consumo do dia</Text>

                <TouchableOpacity style={css.btn} onPress={() => props.navigation.navigate('AddFood')} >
                    <Text style={css.textBtn}>Adicionar alimentos</Text>
                </TouchableOpacity>

            </View>

        </ScrollView >
      
    </View>
  );
}


