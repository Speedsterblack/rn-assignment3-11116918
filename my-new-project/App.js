import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Text, View, SafeAreaView, Image,TextInput,TouchableOpacity, FlatList, } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.subText}>12 task</Text>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
  );

  const renderOngoingTask = ({item}) => (
    <TouchableOpacity style={styles.items}>
      <Text style={styles.ongoingTask}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.SafeArea}>
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
        <View style={styles.searchBoxContainer}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />          
            <Image
              source={require('./assets/Vector1.png')}
              style={styles.searchIcon}
            />
        </View>
        <View style={styles.filterIcon}>
          <Image
            source={require('./assets/Vector.png')}
            style={styles.filterImage}
          />
        </View>
      </View>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.group4}>
      <View style={styles.categoriescard}>
      <Text style={styles.categoryTitle}></Text>
      <Text style={styles.categoryTasks}>Exercise</Text>
        <Image source={require('./assets/youngonline.png')} style={styles.categoryImage} />
        </View>
        <View style={styles.categoriescard}>
        <Text style={styles.categoryTitle}>12 Tasks</Text>
      <Text style={styles.categoryTasks}>Study</Text>
        <Image source={require('./assets/youngwoman.png')} style={styles.categoryImage} />
        </View>
        </View>
        <View style={styles.group4}>
      <View style={styles.categoriescard}>
      <Text style={styles.categoryTitle}>12 Tasks</Text>
      <Text style={styles.categoryTasks}>Exercise</Text>
        <Image source={require('./assets/youngonline.png')} style={styles.categoryImage} />
        </View>
        <View style={styles.categoriescard}>
        <Text style={styles.categoryTitle}>Exercise</Text>
        <Image source={require('./assets/3d-business-non-binary-person-exercises-with-dumbbells.png')} style={styles.categoryImage} />
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
      <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Push Ups</Text>
      </View>
</View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
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
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%',
    top: 0,
  },
  searchBoxContainer: {
    flex: 1,
    position: 'relative',
  },
  searchBox: {
    width: '95%',
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 40,
    fontSize: 16,
    color: '#000',
  },
  searchIcon: {
    width: 16,
    height: 16,
    left: 20,
    top: -30,
  },
  filterIcon: {
    width: 50,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F0522F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    top: -10,
  },
  filterImage: {
    width: 28,
    height: 28,
    top: 0,
  },
  categories:{
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    top: -30,
  },
  group4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontWeight: '600',
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