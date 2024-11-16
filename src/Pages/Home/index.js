import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Feather, AntDesign } from "@expo/vector-icons";
import React, { useState } from 'react';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.container1}>
            <AntDesign 
              name='user'
              size={40}
              color="white"
              style={{marginRight:'12'}}
            />
            <Text style={{fontSize: '25px', fontFamily: 'sans-serif', fontWeight:'bold', marginLeft:'2px'}}>
            Bom dia, filho!
            </Text>
        </View>

            <View style={styles.container2}>
              <Text style={{fontWeight:'bold', fontFamily:'sans-serif', fontSize:'27px', paddingRight:'125px', paddingTop:'12%'}}> HOJE </Text>
              <AntDesign 
              name='calendar'
              size={57}
              color="#f65f01"
              style={styles.calendarIcon}
            />
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: '#f65f01',
    width: '85%',
    height: '10%',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:'10%',
    borderRadius:'11px',
  },
  container2: {
    alignSelf:'center',
    flexDirection:'row',
    marginTop:'10%',
    marginRight:'4%'
  },
  calendarIcon:{
    borderRadius:'50px',
    borderColor: '#f65f01',
    borderWidth: '2px',
    width:'70px',
    height:'70px',
    paddingLeft:'5px',
  }
});
