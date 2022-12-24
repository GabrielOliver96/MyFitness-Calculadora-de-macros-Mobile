import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { css } from '../src/css.js';

export default function App(props) {

  function login(){

  }

  return (
    <View style={css.container}>

      <View style={css.containerLogo}>
        <Text style={css.logo}>MyFitness</Text>
      </View>

      <View style={css.containerForm}>

        <TextInput placeholder='E-mail' style={css.textInput} onChangeText={text=>setUserEmail(text)} />

        <TextInput placeholder='Senha'  style={css.textInput} secureTextEntry={true} onChangeText={text=>setUserPassword(text)} />

        <Text style={ css.text } onPress={() => props.navigation.navigate('Register')}>Esqueci minha senha.</Text>

        <TouchableOpacity style={css.btn} >
          <Text style={css.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <Text style={ css.link } onPress={() => props.navigation.navigate('Register')}>Cadastre-se</Text>

        <Text style={ css.link } onPress={() => props.navigation.navigate('MyGoals')}>Minhas Metas</Text>

        <Text style={ css.link } onPress={() => props.navigation.navigate('AddFood')}>Adicionar Alimento</Text>

        <Text style={ css.link } onPress={() => props.navigation.navigate('AllMyFoods')}>Adicionar Alimento</Text>
      </View>
      
    </View>
  );
}


