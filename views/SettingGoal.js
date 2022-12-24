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

                <Text style={css.textTitle}>Estabelecendo metas</Text>

                <Text style={css.text}>
                Preenchendo as informações abaixo calcularemos sua Taxa Metabólica Basal (TMB), essa taxa é o mínimo de energia necessária para manter as funções do organismo em repouso, como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal. Através desse cálculo é possível saber a quantidade de alimento que você precisa comer para ganhar peso ou perder.
                </Text>

                <TextInput placeholder='Sexo' style={css.textInput}></TextInput>

                <TextInput placeholder='Idade'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Peso'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Estatura'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Atividade diária'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Calorias'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Carboidratos'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Proteínas'  style={css.textInput} secureTextEntry={true}></TextInput>

                <TextInput placeholder='Gorduras'  style={css.textInput} secureTextEntry={true}></TextInput>

                <Text style={css.text}>
                    Tente responder as perguntas de forma precisa, dessa forma é possível chegar o mais próximo possível do real valor. Esses valores também podem ser alterados por você conforme desejar.
                </Text>

                <TouchableOpacity style={css.btn} >
                    <Text style={css.textBtn}>Calcular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.btn} >
                    <Text style={css.textBtn}>Finalizar</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    </View>
  );
}


