import  React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Choose({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.titulo}>
              Bem-vindo!
              Family App
          </Text>
            <Image  
              source={require('../Images/logo.jpeg')} 
              style={styles.bearToy}
            />
        </View>
            <View style={styles.container2}>
              <Image  
                  source={require('../Images/parents.png')} 
                  style={styles.icon}
              />
                <TouchableOpacity style={styles.bottom}
                  onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.bottomName}>  Sou Pai/Mãe </Text>
                </TouchableOpacity>
            </View>
                <View style={styles.container2}>
                  <Image  
                      source={require('../Images/children.png')} 
                      style={styles.icon}
                  />
                    <TouchableOpacity style={styles.bottom}
                      onPress={() => navigation.navigate('Login')}>
                          <Text style={styles.bottomName}>  Sou Filho(a) </Text>
                    </TouchableOpacity>
            </View>
                <Image  
                source={require('../Images/car.png')} 
                style={styles.carToy}
                />
                <Image  
                source={require('../Images/crib.png')} 
                style={styles.cribToy}
                />
              
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
    container1: {
    flexDirection:'row',
    backgroundColor: '#ecf0f1',
    width:'100%',
    marginTop:'15%',
    marginBottom:'33%',
    marginLeft:'7%'
  },
  titulo: {
    
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'#ff5b14',
    justifyContent: 'start',
    paddingRight: '15%',
    alignSelf: 'center'
  },
  bearToy:{
    width:'70px',
    height:'70px',
    transform: [{ rotate: '28deg'}],
    
  },
  container2:{
    flexDirection:'row',
    width:'60%',
    height:'10%',
    alignSelf:'center',
    alignItems:'center'

  },
  icon:{
    width:'37px',
    height:'37px',
    marginRight:'11%'
    
  },
    bottom:{
    backgroundColor:'#ff5b14',
    alignItems: "center",
    width: '130px',
    height:'30px',
    fontSize: 14,
    borderRadius: 100,
    padding:7, 
    marginRight: 40,
},
    bottomName:{
    fontWeight:  'bold',
    color: 'white',
    fontSize:'13px',
    
},

  carToy:{
    width:'70px',
    height:'70px',
    marginTop:'10%',
    transform: [{ rotate: '-28deg'}], 
    },
  cribToy:{
    width:'70px',
    height:'70px',
    transform: [{ rotate: '28deg'}],
    marginLeft:'70%'
    
  },    
});
