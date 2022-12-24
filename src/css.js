import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    //Geral
    container: {
      flex: 1,
      backgroundColor: '#2780D8',
    },

    containerLogo: {
      flex: 1,
      backgroundColor: '#2780D8',
      justifyContent: 'center',
      alignItems: 'center'
    },

    containerContent: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    },

    containerForm: {
      flex: 2,
      backgroundColor: '#2780D8',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    },

    logo: {
      color: '#fff',
      fontSize: 30,
      margin: 20,
    },  

    caloriesProgressBar: {
      width: '80%',
    },

    textTitle: {
      color: '#fff',
      fontSize: 20,
      margin: 10
    },

    textInput: {
      backgroundColor: '#fff',
      fontSize: 15,
      width: '100%',
      height: 40,
      padding: 10,
      margin: 10,
      borderRadius: 20,
    },

    btn: {
      width: '100%',
      height: 40,
      backgroundColor: '#0D6EFD',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },

    textBtn: {
      color: '#fff',
      textAlign:'center'
    },

    text: {
      color: '#fff',
    },

    textBlack: {
      color: 'black',
    },

    enterButton: {
      borderRadius: 30,
      margin: 20,
    },
  
    link: {
      margin: 20,
      color: '#fff',
    },
  
  });

  export {css};