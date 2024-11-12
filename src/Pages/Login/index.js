import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input } from 'react-native-elements';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = () => {
    let error = false;
    setErrorEmail(null);
    setErrorPassword(null);

    // Validação de e-mail
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente");
      error = true;
    }
    
    if (email.trim() === '') {
      setErrorEmail("Ops, seu e-mail não pode ser vazio!");
      error = true;
    }

    // Validação de senha
    if (password.trim() === '') {
      setErrorPassword("Ops, sua senha não pode ser vazia!");
      error = true;
    }
    
    if (password.length < 4) {
      setErrorPassword("Senha não pode ser menor que 4 caracteres.");
      error = true;
    }

    return !error;
  };

  const login = () => {
    if (validate()){
      navigation.navigate('Home')
    }
    }

  return (
    <View style={styles.background}>
        
        <View style={styles.containerLaranja}></View>

            <View style={styles.containerbotaoexit}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: '#FF4500',
                  marginTop: 8,
                  marginRight: 8,
                  width: '9%',
                  height: '50.2%',
                  borderRadius: '100%',
                }}
              >
                <Text style={{ color: 'white', alignSelf: 'center', paddingTop: 6, fontFamily: 'arial' }}>X</Text>
              </TouchableOpacity>
            </View>

                <Text style={{ color: 'black', alignSelf: 'flex-start', marginLeft: 25, fontSize: 60, fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                  Login
                </Text>

                    <View style={styles.containerlogo}>
                      <Image style={{ width: 340, height: 170 }} source={require('../Images/logo.jpeg')} />
                    </View>

                        <View style={styles.container}>
                          <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#FF4500"
                            onChangeText={(value) => {
                            setEmail(value);
                            setErrorEmail(null);
                            }}
                            value={email}
                          />
                          {errorEmail && <Text style={styles.errorText}>{errorEmail}</Text>}
                          <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#FF4500"
                            secureTextEntry
                            onChangeText={(value) => {
                            setPassword(value);
                            setErrorPassword(null);
                            }}
                            value={password}
                          />
                          {errorPassword && <Text style={styles.errorText}>{errorPassword}</Text>}
                              
                              <TouchableOpacity style={styles.btnSubmit} onPress={() => login()}>     
                                <Feather
                                  name='arrow-right'
                                  size={35}
                                  color="white"
                                  />
                              </TouchableOpacity> 
                                    
                                    <TouchableOpacity style={styles.btnRegister}>
                                      <Text style={styles.registerText}> Esqueceu a senha? </Text>
                                    </TouchableOpacity> 
                                    <View style={{flexDirection:'row'}}>
                                      <Text> Não tem uma conta? </Text>
                                    <TouchableOpacity 
                                     onPress={ () => navigation.navigate('Register')}>
                                      
                                        <Text style={{textDecorationLine: 'underline', fontWeight:'bold'}}> Inscreva-se </Text>
                                    </TouchableOpacity>
                                    </View>
                        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  containerLaranja: {
    width: '100%',
    height: '7%',
    backgroundColor:'#FF4500',
    borderBottomRightRadius:'75%'
  },
  containerbotaoexit: {
    width: '100%',
    height: '8%',
    backgroundColor:'white',
    borderTopWidth: 1.8,
    borderColor:'grey',
    borderTopRightRadius:'15%',
    borderTopLeftRadius:'15%',
    alignSelf:'center', 
    borderBottomColor:'white',
    marginTop:'5%'
  },
  background:{
    flex:1,
    backgroundColor: 'white'
  },
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:30,
    alignSelf:'center'
  },
  input:{
    backgroundColor:'#FFF',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 19,
    height:'57px',
    borderRadius: 7,
    padding:10,
    borderWidth:'1px',
    borderColor:'#0B0215',
  },  
  btnSubmit:{
    backgroundColor:'#FF4500',
    width:'40%',
    height:'12%',
    alignItems:'end',
    borderWidth:'2px',
    borderColor:'#0B0215',
  },
  btnRegister:{
    marginTop:10,
    alignItems:'right',
  },
  registerText:{
    textDecorationLine: 'underline',
  },
  containerlogo: {
    alignSelf:'center',
    marginTop:'15%',
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
}); 

