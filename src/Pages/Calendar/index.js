import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { Feather, AntDesign } from "@expo/vector-icons";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import React, {useState} from 'react';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Février',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'fr';

const Task = [
  { id: '1', titulo: 'Arrumar a cama', subtitulo: 'Todos os dias' },
  { id: '2', titulo: 'Fazer a lição de casa', subtitulo: 'Todos os dias' },
  { id: '3', titulo: 'Recolher a louça da mesa', subtitulo: 'Todos os dias' },
  { id: '4', titulo: 'Escovar os dentes', subtitulo: 'Todos os dias' },
  { id: '4', titulo: 'Colocar água pro pet', subtitulo: 'Todos os dias' },
];

const TaskItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
            <View style={styles.iconContainer}>
            {/* Ícone do calendário */}
            <Feather 
                name='calendar'
                size={15}
                color="white"
                style={{paddingLeft:'9%',paddingBottom:'10%',}}  
            />
            </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.titulo}</Text>
                    <Text style={styles.subtitle}>{item.subtitulo}</Text>
                </View>
    </View>
                <TouchableOpacity style={styles.optionsButton}>
                    <Text style={styles.optionsText}>⋮</Text>
                </TouchableOpacity>
    </View>
  );
};

export default function CalendarScreen({ navigation }) {
  const [selected, setSelected] = useState('');
      return (
            <SafeAreaView style={styles.container}>
                <View style={{backgroundColor:'white', alignItems:'end',paddingRight:'4%', paddingTop:'4%'}}> 
                      <TouchableOpacity>
                        <Feather 
                          name='search'
                          size={20}
                          color="#f65f01"  
                        />
                      </TouchableOpacity>
                  </View>
                      <TouchableOpacity style={styles.btnAdd} onPress={ () => navigation.navigate('CreatTaskScreen')}>
                        <Feather 
                          name='plus'
                          size={15}
                          color="white"
                          style={{paddingLeft:'15%',paddingBottom:'10%',}}  
                        />
                        <Text style={{paddingBottom:12, color:'white', fontSize:10}}> Add tarefa</Text>
                      </TouchableOpacity>
                        <View style={styles.container1}>
                        
                            <Calendar
                              onDayPress={day => {
                              setSelected(day.dateString);
                              }}
                                  
                              style={{
                              width:'343px',
                              backgroundColor:'',
                              monthNamesShort:'#f65f01',
                              }}
                              
                              current={'2024-11-11'}
                              markedDates={{
                              [selected]: {selected: true, disableTouchEvent: true, selectedColor: '#f65f01'},
                              '2024-11-18': {selected: true, marked: true, selectedColor: '#f65f01'},
                              '2024-11-27': {marked: true},
                              '2024-11-14': {selected: true, marked: true, selectedColor: '#f65f01'},
                              '2024-11-01': {selected: true, marked: true, selectedColor: '#f65f01'},
                              '2024-11-28': {marked: true, },
                              }}

                              theme={{
                              backgroundColor: '#ffffff',
                              calendarBackground: '#ffffff',
                              textSectionTitleColor: '#b6c1cd',
                              selectedDayBackgroundColor: '#edd5c7',
                              selectedDayTextColor: 'white',
                              todayTextColor: 'purple',
                              dayTextColor: '#f65f01',
                              textDisabledColor: '#dd99ee',
                              dayNamesShortTextColor:'#f65f01',
                              }}

                            />
                        </View>
                            <Text style={{fontSize:15, fontWeight:'bold', color:'#f65f01',paddingBottom:'2%', paddingLeft:'3%'}}>Tarefas</Text>
                               <ScrollView style={{paddingLeft:'9%'}}>
                                  {Task.map((item) => (
                                  <TaskItem key={item.id} item={item} />
                                  ))}
                                </ScrollView>
    </SafeAreaView>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flexDirection:'row',
    alignSelf: 'center',
    backgroundColor: 'white',
    width:'100%',
    height:'10%',
    marginTop:'2%',
    marginBottom:'80%'
  },
  btnAdd:{
    backgroundColor:'#f65f01',
    width:'28%',
    height:'6%',
    borderRadius:50,
    alignItems:'end',
    alignSelf:'center',
    marginTop: '20px',
    flexDirection:'row',
    marginLeft:'50%'
  },
  containerTask4:{
    backgroundColor:'#ecf0f1',
    marginTop:'100%',
    height:'40%',
    flexDirection:'colum',
  },
  containerTask: {
    padding: 3,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
    marginTop:'80%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'90%',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF', // Fundo branco
    borderRadius: 12,
    padding: 9,
    marginBottom: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FF6700', // Cor laranja para o ícone
    borderRadius: 12,
    padding: 10,
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
  },
  optionsButton: {
    padding: 8,
  },
  optionsText: {
    fontSize: 18,
    color: '#999999',
  },
});
