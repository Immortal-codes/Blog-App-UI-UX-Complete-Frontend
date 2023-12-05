// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Switch, isEnabled, toggleSwitch, DatePickerIOS } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';



const DetailsScreen = ({ navigation }) => {

  
 
  return (
    <ScrollView>
    <View style={styles.conatiner}>
      <View style={styles.titleView}>
        <TextInput
          // style={{ height: 50 }}
          style={{ padding: 10, fontSize: 20 }}
          placeholder="Title"
          // onChangeText={newText => setText(newText)}
          defaultValue={''}
        />
      </View>


      <View style={{ backgroundColor: "black", height: 1, margin: 10 }}>

      </View>
      <View style={styles.post}>
        <TextInput
          style={{ fontSize: 20 }}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Start creating your Post"


        />
      </View>

      <View style={styles.label}
      >
        <TextInput style={{ fontSize: 20, margin: 5 }}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Labels"

        />
      </View>

      <View style={styles.publish}>

        <Text style={{ fontSize: 20, margin: 5 }}>Publish now ?</Text>
        <View style={styles.buttonView} >
          <Switch style={styles.button}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

      </View>

     
    

       


    </View>

    </ScrollView>


  );
};



const styles = StyleSheet.create({

  conatiner: {
    flex: 1,
    backgroundColor: 'white'

  },

  titleView: {

    //backgroundColor:'red',
    height: 60,
    margin: 10


  },

  post: {
    backgroundColor: 'snow',
    height: 100,
    borderRadius: 10,
    width: 350,
    marginLeft: 10,
    margin: 10,

    //

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 14,
    shadowRadius: 9,



  },

  label: {

    height: 40,
    marginVertical: 10
  },

  publish: {
    // backgroundColor: 'brown',

    margin: 10,



  },

  buttonView: {


    marginLeft: 300,
    marginTop: -35,

  },

  button: {

    // marginLeft: 300,
    flexDirection: 'column-reverse',
    marginBottom: 10

  }
})



export default DetailsScreen;





