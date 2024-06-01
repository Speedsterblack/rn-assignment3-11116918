import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.frame1}>
        <View style={styles.group7}>
          <Text style={styles.helloDevs}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
          <View style={styles.profileImage}>
          <View style={styles.Ellipse1} />
          <Image source={require('./assets/person.png')} style={styles.person} />
        </View>
        </View>

      </View>
      <View style={styles.searchSection}>
        <TextInput style={styles.searchBox} placeholder="Search" />
        <View style={styles.filterIcon}>
          <Image source={require('./assets/Vector.png')} style={styles.filterImage} />
        </View>
      </View>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.group4}>
      <View style={styles.categoriescard}>
      <Text style={styles.categoryTitle}>12 Tasks</Text>
      <Text style={styles.categoryTasks}>Exercise</Text>
        <Image source={require('./assets/youngonline.png')} style={styles.categoryImage} />
        <View style={styles.group6}>
        </View>
        <View style={styles.rectangle5}/>
        </View>
        <View style={styles.categoriescard}>
        <Text style={styles.categoryTitle}>12 Tasks</Text>
      <Text style={styles.categoryTasks}>Study</Text>
        <Image source={require('./assets/youngwoman.png')} style={styles.categoryImage} />
         <View style={styles.rectangle4}/>
        </View>
      </View>
      <Text style={styles.ongoingtask}>Ongoing Task</Text>
      <View style={styles.taskCard}>
      <View style={styles.group3}>
          <Text style={styles.taskTitle}>Mobile App Development</Text>
        </View>
      </View>
      <View style={styles.taskCard}>
      <View style={styles.group2}>
          <Text style={styles.taskTitle}>Web Development</Text>
        </View>
      </View>
     <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Push Ups</Text>
      </View>
</View>
  );
}

const styles = StyleSheet.create({
container: {
    borderRadius:30,
    flex: 1,    
    backgroundColor: '#F7F0E8',
    width: 393,
    height: 852,
    paddingHorizontal: 20,
    paddingTop: 50,
    position: 'relative',
  },
  frame1:{
    width: 354,
    height: 52,
    top: -20,
    left: 10,
  },
  helloDevs:{
    fontfamily: 'Lato',
    fontSize: 32,
    fontweight: 700,
    lineheight: 38.4,
  },
  tasks:{
    fontfamily: 'Lato',
    fontSize: 12,
    fontweight: 500,
    lineheight: 14.4,
    top: 0,
  
  },
  profileImage:{
    width: 50,
    height: 50,
  },
  person:{
    width: 46,
    height: 45,
    left: 260, 
    top: -101,
  },
  Ellipse1:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    left:257,
    top: -50,
  },
  searchbackground: {

  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 50,
    width: 285,
    left: 25,
    top: -40,
  },
  searchIcon:{
    width: 16,
    height: 16,
    left:-200,
  },
  searchBox: {
    flex: 1,
    width: 200,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    Image : 'searchIcon',
  },
  filterIcon: {
    width: 50,
    height: 48,
    right: 0,
    borderRadius: 14,
    backgroundColor: '#F0522F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  filterImage: {
    width: 28,
    height: 28,
  },
  categories:{
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    top: -30,
  },
  group4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -20,
  },
  categoriescard: {
    width: '48%',
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    padding: 15,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    left: 30,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    textAlign: 'left',
  },
  categoryTasks: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    textAlign: 'left',
  },
  ongoingtask: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    top: -10,
    marginBottom: 40,
  },
  taskCard: {
    width: '90%',
    height: 100,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    marginBottom: 20,
    padding: 15,
    top: -30,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    top: 20,
  },
  taskDetail: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
  },

});
