import React, { useState } from "react";
import { View, Text,TouchableOpacity, StyleSheet, Button, Alert } from "react-native";
import {Input} from 'react-native-elements';
import ButtonMultiselect, { ButtonLayout, } from 'react-native-button-multiselect';
import { Feather } from "@expo/vector-icons";

const CreatTaskScreen = () => {

    const [nomeTarefa, setNomeTarefa] = useState(""); // Estado para o nome da tarefa
    const [descricao, setDescricao] = useState(""); // Estado para a descrição da tarefa
    const [date, setDate] = useState(""); // Estado a data
    const [iniciarTime, setIniciarTime] = useState(""); // Estado para iniciar tarefa
    const [terminarTime, setterminarTime] = useState(""); // Estado para terminar tarefa
    const criarTarefa = () => {
      if (!nomeTarefa || !descricao || !iniciarTime || !terminarTime || !date) {
        Alert.alert("Erro", "Preencha todos os campos antes de criar a tarefa.");
        return;
      }
  
      // Exibe a mensagem de sucesso
      Alert.alert("Sucesso!", "Tarefa criada com sucesso!", [
        {
          text: "OK",
          onPress: () => console.log("Tarefa criada"),
        },
      ]);
  
      // Limpa os campos
      setNomeTarefa("");
      setDate("");
      setIniciarTime("");
      setterminarTime("");
      setDescricao("");};
      
const buttons1 = [
    { label: 'Tarefa escolar', value: 'option1' },
    { label: 'Tarefa doméstica ', value: 'option2' },
    ];
    const buttons2 = [
    { label: 'Tarefa lembrete', value: 'option3' },
    { label: 'Tarefa culinária ', value: 'option4' },
    ];

    // Set up state and handlers for selected buttons
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
    };


  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', marginBottom:'5%', paddingLeft:'4%', marginTop:'3%'}}>
          <TouchableOpacity onPress={ () => navigation.navigate('Calendar')}>
            <Feather 
              name='chevron-left'
              size={25}
              color="white"  
            />
          </TouchableOpacity>
          <Text style={{font:'12', color:'white', alignSelf:'center', marginLeft:'22%', marginRight:'20%', fontWeight:'bold'}}>Criar uma tarefa</Text>
          <TouchableOpacity>
            <Feather 
              name='search'
              size={21}
              color="white" 
              style={{paddingTop:'10%'}} 
            />
          </TouchableOpacity>
        </View>
      
          <View style={{marginTop:'8%', marginLeft:'5%'}}>
            <Text style={styles.label}>Nome</Text>
              <Input
                style={styles.caixa}
                value={nomeTarefa}
                onChangeText={setNomeTarefa}
              />
              <Text style={styles.label}>Data</Text>
              <Input
                style={styles.caixa}
                value={date}
                onChangeText={setDate}
              />
          </View>
              <View style={{backgroundColor:'white', width:'100%', height:'70%', borderTopLeftRadius:'10px', borderTopRightRadius:'10px', marginTop:'5%', paddingLeft:'2%'}}>
                  <View style={{flexDirection:'row'}}>
                      <View style={{flexDirection:'colum',width:'50%', paddingTop:'5%'}}>
                      <Text style={{fontSize:10, color:'grey', paddingLeft:'5%'}}>Iniciar</Text>
                        <Input
                          style={{}}
                          value={iniciarTime}
                          onChangeText={setIniciarTime}
                        />
                          </View>
                        <View style={{flexDirection:'colum', width:'50%',paddingTop:'5%'}}>
                        <Text style={{fontSize:10, color:'grey', paddingLeft:'5%'}}>Terminar</Text>
                          <Input
                            style={{}}
                            value={terminarTime}
                            onChangeText={setterminarTime}
                          /> 
                        </View>
                  </View>
                      
                      <View style={{marginTop:'8%', marginLeft:'5%'}}>
                        <Text style={{color:'grey'}}>Descrição</Text>
                          <Input
                            style={{}}
                            value={descricao}
                            onChangeText={setDescricao}
                          />
                      </View>
                          <Text style={{fontSize:10, color:'grey', paddingLeft:'5%',marginTop:'5%'}}>Categoria</Text>
                            <View style={{alignSelf:'center',paddingTop:'4%', flexDirection:'colum',width:'80%' }}>
                              <ButtonMultiselect
                                layout={ButtonLayout} // Choose from ButtonLayout enum: CAROUSEL, FULL_WIDTH, GRID
                                buttons={buttons1}
                                selectedButtons={selectedButtons}
                                onButtonSelected={handleButtonSelected}  
                              />
                            </View>
                                <View style={{alignSelf:'center',paddingTop:'4%', flexDirection:'colum', width:'80%' }}>
                                    <ButtonMultiselect
                                      layout={ButtonLayout} // Choose from ButtonLayout enum: CAROUSEL, FULL_WIDTH, GRID
                                      buttons={buttons2}
                                      selectedButtons={selectedButtons}
                                      onButtonSelected={handleButtonSelected}
                                    />
                                </View>
                                    <TouchableOpacity style={styles.submitButton} onPress={criarTarefa}>
                                      Criar tarefa
                                    </TouchableOpacity>
                </View>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f65f01",
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
submitButton:{
   backgroundColor: "#FF7A00", // Cor do botão
   paddingVertical: 15, // Altura
   paddingHorizontal: 50, // Largura
   borderRadius: 30, // Deixa o botão arredondado
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 4,
   elevation: 3, 
   color:'white', 
   marginTop:'5%', 
   alignItems:'center', 
   width:'85%', 
   alignSelf:'center'
  },
});

export default CreatTaskScreen;


