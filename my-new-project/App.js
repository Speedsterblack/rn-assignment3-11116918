import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.Task}> 
    <View style={styles.frame1}> 
    <View style={styles.group1} >  
      <Text style={styles.helloDevs}>Hello, Devs</Text> 
      <Text style={styles.tasks}>14 tasks today</Text>
      </View> 
      <View style={styles.profileimage}>
      <View style={styles.Ellipse1}/>
      <Image source={require('./assets/person.png')} style={styles.person}/>
      </View>

      </View> 
      <View style={styles.search}>
        <View style={styles.filter}>
        <View style={styles.group2}>
        <View style={styles.bxslider}/>
        <View style={styles.rectangle2}/> 
        <Image source={require('./assets/Vector.png')} style={styles.vector}/>  
        </View>
        </View>
        <View style={styles.searchbox}>
        <View style={styles.group6}>
          <View style={styles.group5}>
            <Text style={styles.Search}>Search</Text>
          </View>
          <View style={styles.rectangle1}>
            </View>
          </View>  
          </View>
        </View>
        </View>   
  );
}

const styles = StyleSheet.create({
 /*Task: {
    width: 393,
height: 852,
top: -428,
left: -409,
borderradius: 30,
  },*/
 frame1:{
    width: 360,
height: 100,
top: 0,
left: 0,
backgroundColor:'blue',
    },
    group1:{
      width: 170,
      height: 52,      
    },
  helloDevs: {
    fontSize: 32,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Lato',
    lineHeight: 38.4,
    width:170,
    height: 37,
    top:30,
    left: 20,
  },
  tasks: {
    color: 'black',
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 14.4,
    top: 39,
    left: 20,

  },
  profileimage: {
    width: 50,
    height: 52,
  },  
  person: {
    width: 46,
    height: 37,
    scale: 'fit',
    left:306,
    top: -60,
    
  },
  Ellipse1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'black',
    left: 304,
    top: -15,
  },
  search: {

  },
  group2:{
    backgroundColor:'orange',
    width: 360,
height: 100,
top: 0,
left: 0,
borderradius: 14,

  },
  vector: {
    width: 30,
    height: 30,
    scale: 'fit',
    left: 313,
    top: -49,
  },
  bxslider: {
    width: 34,
    height: 34,
    left: 331,
    top: 10,
  },
  rectangle2: {
    width: 50,
    height: 48,
    backgroundColor: '#F0522F',
    top: -10,
    left: 303,
    borderRadius: 14,
  },
  rectangle1: {
    width: 280,
    height: 50,
    backgroundColor: '#FBF9F7',
    top: -77,
    left: 10,
  },
});
