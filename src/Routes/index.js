import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Register from '../Pages/Register/Register';
import Login from '../Pages/Login';
import Home from '../Pages/Home/index.js';
//import Home from '../Pages/Home';
//import forgotPassword from '../Pages/Login';
//import Register from '../Pages/Register';
//import Profile from '../Pages/Profile';
//import Notifications from '../Pages/Notifications';
//import Upload from '../Pages/Upload';
//import Chat from '../Pages/Chat';
//import Settings from '../Pages/Settings';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return( 
    <Tab.Navigator
      barStyle= {estilo.menu}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options = {{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({color, size})=> (
            <Feather name='home' color="white" size={25}/>
          )
          }}
      />
      <Tab.Screen
        name='Register'
        component={Register}
        options = {{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({color, size})=> (
            <Feather name='message-circle' color="white" size={25}/>
          )
          }}
      />
 
    </Tab.Navigator> 
   );
 }
 const estilo = StyleSheet.create({
  menu:{
    backgroundColor: '#f65f01',
    fontSize: 20,
    fontWeight: 'bold',
    tabBarActiveTintColor: '#f65f01'
  }
});

//instances
const Drawer = createDrawerNavigator(); 

export default function Routes(){
  return(

    <Drawer.Navigator>
                              <Drawer.Screen
        name = 'Login'
        component = {Login}
        options = {{
            title: 'Login',
            headerShown: false
        }}
      />
            <Drawer.Screen
        name = 'Home'
        component = {MyTabs}
        options = {{
            title: 'Escolha Responsável ou Dependente',
            headerShown: false
        }}
      />
      <Drawer.Screen
        name = 'Register'
        component = {Register}
        options = {{
            title: 'Escolha Responsável ou Dependente',
            headerShown: false
        }}
      />

      
    </Drawer.Navigator>
  );
}