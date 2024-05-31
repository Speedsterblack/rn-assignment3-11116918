import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskcard1}>
        <View style={styles.group1}>
          <Text style={styles.exercise}>Exercise</Text>
          <Text style={styles.pushups}>Push Ups</Text>
        </View>
        <View style={styles.rectangle1}/>
      </View>
      <View style={styles.taskcard2}>
      <View style={styles.group2}>
          <Text style={styles.webdevelopment}>Web Development</Text>
        </View>
        <View style={styles.rectangle2}/>
      </View>
      <View style={styles.taskcard3}>
      <View style={styles.group3}>
          <Text style={styles.mobileapp}>Mobile App Development</Text>
        </View>
        <View style={styles.rectangle3}/>
      </View>
      <View style={styles.group4}>
        <View style={styles.categoriescard1}>
        <Image source={require('./assets/youngwoman.png')} style={styles.youngwoman} />
        <View style={styles.group5}>
        <Text style={styles.tasks12}>12 Tasks</Text>
      <Text style={styles.Study}>Study</Text>
        </View>
        <View style={styles.rectangle4}/>
        </View>
        <View style={styles.categoriescard2}>
        <Image source={require('./assets/youngonline.png')} style={styles.youngonline} />
        <View style={styles.group6}>
        <Text style={styles.tasks12}>12 Tasks</Text>
      <Text style={styles.exercise}>Exercise</Text>
        </View>
        <View style={styles.rectangle5}/>
        </View>
      </View>
      <Text style={styles.ongoingtask}>Ongoing Task</Text>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.frame1}>
        <View style={styles.group7}>
          <Text style={styles.helloDevs}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <View style={styles.Ellipse1} />
          <Image source={require('./assets/person.png')} style={styles.person} />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.filter}>
          <View style={styles.group8}>
            <View style={styles.bxslider} />
            <View style={styles.rectangle6} />
            <Image source={require('./assets/Vector.png')} style={styles.vector} />
          </View>
        </View>
        <View style={styles.searchbox}>
          <View style={styles.group9}>
            <View style={styles.group10}>
              <Text style={styles.searchText}>Search</Text>
              <View style={styles.mynaui}>
                <Image source={require('./assets/Vector1.png')} style={styles.vector1}/>
              </View>
            </View>
            <View style={styles.rectangle7} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    width: 393,
    height:852,
    top:-428,
    left:-409,
    borderRadius:30,
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
  taskcard1:{
    width:354,
    height:128,
    top:784,
    left:20,
    borderRadius:15,
    border:1,
    backgroundColor:'#E8D1BA',
  },
  group1:{
    width: 200,
height: 35,
top: 830,
left: 36,
gap: 0,
opacity: 0,
color: '#000000'
  },
  exercise:{
    width: 50,
height: 14,
top: 851,
left: 36,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 12,
fontweight: 400,
lineheight: 14.4,
textalign: 'left',
color: '#000000',
  },
  pushups:{
    width: 200,
height: 19,
top: 830,
left: 36,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 16,
fontweight: 700,
lineheight: 19.2,
textalign: 'left',
color: '#000000',
  },
  rectangle1:{
    width: 354,
height: 128,
top: 784,
left: 20,
gap: 0,
borderradius: 15,
border: 1,
opacity: 0,
color: '#E8D1BA'
  },
  taskcard2:{
    width:354,
    height:128,
    top:644,
    left:20,
    borderRadius:15,
    border:1,
    backgroundColor:'#E8D1BA', 
  },
  group2: {
    width: 200,
height: 19,
top: 690,
left: 36,
gap: 0,
opacity: 0,
color: '#000000',
  },
  webdevelopment: {
    width: 200,
height: 19,
top: 690,
left: 36,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 16,
fontweight: 700,
lineheight: 19.2,
textalign: 'left',
color: '#000000',
  },
  rectangle2: {
    width: 354,
height: 128,
top: 644,
left: 20,
gap: 0,
borderradius: 15,
border: 1,
opacity: 0,
color: '#FBF9F7',
borderColor:'#E8D1BA',
  },
  taskcard3:{
    width:354,
    height:128,
    top:504,
    left:20,
    borderRadius:15,
    border:1,
    backgroundColor:'#E8D1BA', 
  },
  group3:{
    width: 200,
height: 19,
top: 550,
left: 36,
gap: 0,
opacity: 0,
color:'#000000',
  },
  mobileapp:{
    width: 200,
height: 19,
top: 550,
left: 36,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 16,
fontweight: 700,
lineheight: 19.2,
textalign: 'left',
color:'#000000',
  },
  rectangle3:{
    width: 354,
    height: 128,
    top: 504,
    left: 20,
    gap: 0,
    borderradius: 15,
    border: 1,
    opacity: 0,
    borderColor:'#E8D1BA',
    alignItems: 'inner'
  },
  group4:{
    width:396,
    height:192,
    top:249,
    left:20,
  },
  categoriescard1:{
    width: 186,
height: 192,
top: 249,
left: 230,
gap: 0,
opacity: 0,
  },
  
  categoriescard2:{
    width: 186,
height: 192,
top: 249,
left: 20,
gap: 0,
opacity: 0,

  },
  ongoingtask:{
    width: 120,
height: 24,
top: 468,
left: 20,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 20,
fontweight: 700,
lineheight: 24,
textalign: 'left',
color:'#000000',
  },
  categories:{
    width: 96,
height: 24,
top: 213,
left: 20,
gap: 0,
opacity: 0,
fontfamily: 'Lato',
fontsize: 20,
fontweight: 700,
lineheight: 24,
textalign: 'left',
color:'#000000',
  },
  frame1:{
    width: 354,
height:  52,
top: 52,
left: 20,
gap: 134,
opacity: 0,
  },
  search: {
    width: 353,
height: 49,
top: 134,
left: 20,
gap: 0,
borderradius: 14,
border: 1,
opacity: 0,
  },
});
