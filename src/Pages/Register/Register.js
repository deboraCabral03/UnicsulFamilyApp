import { Text, SafeAreaView, StyleSheet,View,TextInput,TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from "@expo/vector-icons";
import ButtonMultiselect, { ButtonLayout, } from 'react-native-button-multiselect';
import React, {useState} from 'react';
import MaskInput from 'react-native-mask-input';


export default function Register({ navigation }) {
  const [bithdate, setBirthdate] = React.useState('');
  
  const buttons = [
    { label: 'Responsável', value: 'option1' },
    { label: 'Dependente ', value: 'option2' },
    ];

    // Set up state and handlers for selected buttons
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
    };

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.container1}>
        <Text style={styles.paragraph}>
          Inscreva-se
        </Text>
        <Text style={styles.textAfterSubs}>
          Apenas responsável
        </Text>
    </View>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#f65f01"
            onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#f65f01"
            onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#f65f01"
            onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#f65f01"
            onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
            }}
          />
            <Text style={{fontSize: '15px', paddingLeft:'20px', color:'#f65f01', paddingBottom:'2px',}}> Data de aniversário </Text>
              <MaskInput style={styles.input}
                value={bithdate}
                onChangeText={(masked, unmasked) => {
                setBirthdate(masked); // you can use the unmasked value as well
                // assuming you typed "9" all the way:
                console.log(masked); // 99/99/9999
                console.log(unmasked); // 99999999
                }}
                mask={[/\d/, /\d/, '/', '',/\d/, /\d/, '/',/\d/, /\d/, /\d/, /\d/]}
              />
                <View style={{alignSelf:'center',paddingTop:'4%'}}>
                  <ButtonMultiselect
                    layout={ButtonLayout} // Choose from ButtonLayout enum: CAROUSEL, FULL_WIDTH, GRID
                    buttons={buttons}
                    selectedButtons={selectedButtons}
                    onButtonSelected={handleButtonSelected}
                    // Additional props can be customized as needed
                  />
                </View>

                    <View styles={{}}>
                      <Text style={{fontSize:11, paddingLeft:'15px', width:'70%', alignSelf:'center', marginTop:'18%'}}>
                        Ao criar sua conta, você concorda com os Termos e Condições e
                        a Política de Privacidade do FamilyApp.
                      </Text>
                    </View>

                        <TouchableOpacity style={styles.btnSubmit} onPress={() => login()}>     
                          <Feather
                            name='arrow-right'
                            size={28}
                            color="white"
                          />
                        </TouchableOpacity> 
                            <Text style={{textAlign: 'center', paddingTop: '10px', marginBottom:'5px'}}> OU </Text>
                                <TouchableOpacity style={styles.btngoogle} >
                                  <AntDesign 
                                    name='google'
                                    size={20}
                                    color="#f65f01"
                                    style={{marginRight:'12'}}
                                  />
                                  <Text style={{fontSize: '10px', paddingLeft:'14px'}}> Entrar com o Google </Text>
                            </TouchableOpacity>

                                <View style={{alignSelf:'center', flexDirection:'row', marginTop:'17px'}}>
                                  <Text style={{fontSize: '10px', paddingLeft:'14px', flexDirection:'row'}}> Já está registrado?</Text>
                                  <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
                                  <Text style={{fontSize: '10px', paddingLeft:'14px', fontWeight:'bold', textDecorationLine: 'underline'}}> Entrar </Text>
                                  </TouchableOpacity>
                                </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    paddingTop: '16px',
    marginTop:'12%',
    marginBottom: '15%'
  },
  paragraph: {
    fontFamily: 'sans-serif',
    fontSize: 53,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft:'20px'
  },
  textAfterSubs: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    paddingLeft:'20px'
  },

  input:{
    backgroundColor:'#FFF',
    width: '90%',
    marginBottom:'7px',
    color: '#222',
    fontSize: 14,
    height:'45px',
    borderRadius: 7,
    alignSelf: 'center',
    padding:1,
    paddingLeft:'2%',
    borderWidth:'1px',
    borderColor:'#f65f01',
  },
  btnSubmit:{
    backgroundColor:'#fe854f',
    width:'40%',
    height:'5%',
    alignItems:'end',
    alignSelf:'center',
    borderWidth:'2px',
    borderColor:'#f65f01',
    marginTop: '47px',
  },
  btngoogle:{
    alignSelf: 'center',
    alignItems:'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 18,
    paddingLeft: '5px',
    width:'45%',
    height:'4%',
    marginTop:'8px',
    borderWidth:'2px',
    borderColor:'grey',
    elevation: 2,
    },
});