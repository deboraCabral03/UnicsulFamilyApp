import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function Start() {
  const navigation = useNavigation();

 useEffect(() => {
  //Aguarda 3 segundos e navega para a próxima tela
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 3000);

     //Limpa o timer se o componente for desmontado antes dos 5 segundos
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View styles={styles.container}>

        <View style={styles.containerCurve}>
            <View style={styles.container1}>
            </View>
            <View style={styles.container2}>
            </View> 
        </View> 

            <view style={styles.containerlogo}>
                <Image  
                source={require('../Images/logo.jpeg')}
                />              
            </view>
                <Image  
                    source={require('../Images/family.jpg')} 
                    style={{alignSelf: 'center'}}
                />
                
                    <View style={styles.containerCurve2}>
                        <View style={styles.container3}>
                        </View>
                        <View style={styles.container4}>
                        </View> 
                    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCurve: {
    backgroundColor: '#FF4500',
    marginLeft:'15%',
    borderBottomLeftRadius:'100%',
    borderBottomRightRadius:'-120%',
  },
  container1: {
    width:'102%',
    height:'80%',
    backgroundColor: '#051937',
    alignSelf: 'flex-end',
    borderBottomLeftRadius:'80%',
    borderBottomRightRadius:'-120%',
  },
  container2: {
    height:'25%',
    backgroundColor: '#FF4500',
    alignSelf: 'flex-end',
    borderBottomLeftRadius:'80%',
    borderBottomRightRadius:'-120%',
    marginBottom: '50%',
  },
  containerlogo: {
    alignSelf:'center',
    marginTop:'20%',
    backgroundColor: 'white',
  },
  containerCurve2: {
    backgroundColor: '#051937',
    marginRight:'15%',
    borderTopRightRadius:'100%',
    borderBottomRightRadius:'25px',
    marginTop:'10%',
  },
  container3: {
    height:'0%',
    width:'25%,',
    backgroundColor: '#FF4500', 
    borderTopRightRadius:'-100%',
    marginBottom: '50%',
  },
  container4: {
    width:'102%',
    height:'80%',
    backgroundColor: '#051937',
    borderTopRightRadius:'120%'
  },
});
