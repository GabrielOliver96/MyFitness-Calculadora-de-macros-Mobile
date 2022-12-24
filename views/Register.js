import React,{useState} from 'react';
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { css } from '../src/css.js';
import api from '../services/api';

export default function App() {

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState();

  function register() {

    api.post('/register', {
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userPasswordConfirmation
    }).then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 

    /*
    api.get('/food/all').then((response) => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    }); 
    */
  }

  return (
    <View style={css.container}>


      <View style={css.containerLogo}>
        <Text style={css.logo}>MyFitness</Text>
      </View>


      <View style={css.containerForm}>

        <TextInput style={css.textInput} placeholder="Seu nome..." onChangeText={text=>setUserName(text)} />

        <TextInput style={css.textInput} placeholder="Seu email..." onChangeText={text=>setUserEmail(text)} />

        <TextInput style={css.textInput} secureTextEntry={true} placeholder="Sua senha..." onChangeText={text=>setUserPassword(text)} />

        <TextInput style={css.textInput} secureTextEntry={true} placeholder="Sua senha..." onChangeText={text=>setUserPasswordConfirmation(text)} />

        <Text style={css.text}>Ao continuar você concorda com os termos de uso do MyFitness.</Text>

        <TouchableOpacity style={css.btn} onPress={() => register()}>
          <Text style={css.textBtn}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
      

    </View>
  );
}

