// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Directions, ScrollView } from 'react-native-gesture-handler';



const HomeScreen = ({ navigation }) => {


  return (
   
    <ScrollView>
    
      
      <View style={styles.container} >

       

        <View>
          <Text style={styles.welcome}>Welcome to Blogger</Text>
        </View>

        <View style={styles.create}><Text>Create a unique blog to publish your passions , your way</Text></View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Button
              title="Create a blog"
              onPress={() => navigation.navigate('Details')}
            /></TouchableOpacity>
        </View>
        <View style={styles.imageView}>

          <Image
            source={require('../Pictures/pic.png')} // Replace with the actual local image path
            style={styles.image}
          />

        </View>



      </View>
    </ScrollView>
    
  );
};


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 2,

  },

  welcome: {
    fontSize: 28,
    marginTop: 70,
    marginLeft: 70,
    justifyContent: 'center',
    // backgroundColor: 'blue',


  },
  create: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
    // backgroundColor: 'green',


  },

  buttonView: {
    // backgroundColor: 'black',
    marginVertical: 70,
    marginLeft: 110,
    marginRight: 50,
    width: 100,
  },

  button: {


    borderRadius: 10,
    width: 150,
    height: 45,
    backgroundColor: '#f8f8ff',
    Colors: 'white',



  },

  imageView: {

    // backgroundColor: 'red',
    height:200,
    width:200,
    marginLeft:210,
    marginVertical:90



  },

  image: {
    height:150,
    width:150,
    


  }




});


export default HomeScreen;



