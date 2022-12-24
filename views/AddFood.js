import React,{useState} from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { css } from '../src/css.js';

export default function App() {

  return (
    <View style={css.container}>

        
        <ScrollView>

            <View style={css.containerLogo}>
                <Text style={css.logo}>MyFitness</Text>
            </View>

            <View style={css.containerForm}>

                <Text style={css.text}>
                    Adicione seus proprios alimentos para adaptar os cálculos ao seu dia a dia.
                </Text>

                <TextInput style={css.textInput} placeholder="Nome do alimento..." /*onChangeText={text=>setUserName(text)}*/ />

                <TextInput style={css.textInput} placeholder="Quantidade em gramas..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Calorias..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Carboidratos..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Proteínas..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Gorduras Totais..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Gorduras Saturadas..." />

                <TextInput style={css.textInput} secureTextEntry={true} placeholder="Gorduras Trans..." />

                <Text style={css.text}>Pesquise antes de adicionar as informações sobre os alimentos, para que não existam informações incorretas adicionadas em sistema.</Text>

                <TouchableOpacity style={css.btn} onPress={() => register()}>
                    <Text style={css.textBtn}>Adicionar</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
      

    </View>
  );
}

