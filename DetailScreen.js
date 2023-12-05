// DetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const DetailsScreen = ({ navigation }) => {
  const myIcon = <Icon name="pencil" size={35} color="black" />;

  const [boxToShow, setBoxToShow] = useState(1);

  const toggleBoxes = () => {
    setBoxToShow((prevBox) => (prevBox % 3) + 1);
  }
 
  return (
    <View style={{flex:1,}} >

      <View style={styles.bar}>

      <TouchableOpacity style={styles.published} onPress={toggleBoxes}>
        <View style={{widht:100, marginLeft:30}}>
          <Text style={{fontSize:20}}>Published</Text>   
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Drafts}>
        <View style={{marginLeft:150,marginVertical:-25}}>
          
          <Text style={{fontSize:20}}>Drafts</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Scheduled}>
        <View style={{marginLeft:250,marginVertical:-25}}>
          <Text style={{fontSize:20}}>Scheduled</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.IconView}>
        
          <TouchableOpacity  style={styles.touch} onPress={() => navigation.navigate('CreatePost')}>
            {myIcon}
          </TouchableOpacity>

        
        
      </View>
      

      <View style={styles.publishedView}>
      <Text>This is Box 1</Text>
      </View>

      <View style={styles.draftView}>

      <Text>This is Box 2</Text>
      </View>

      <View style={styles.scheduledView}>

      <Text>This is Box 1</Text>
      </View>

   
</View>
  );
};

export default DetailsScreen;





const styles = StyleSheet.create({

  IconView: {
    backgroundColor: 'orange',
    borderRadius: 100,
    width: 50,
    height: 50,
    marginVertical:450,
    marginLeft:300
  },

  icon: {

    alignItems: 'center',
    marginVertical: 0,
    height:10,
    width:10
    


  },

  touch:{
    
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems:'center',
    margin:5,
   

  },


  bar:{
    backgroundColor:'powderblue'
  },

  Drafts:{

    backgroundColor:'red'

  },
  
  Scheduled:{

    backgroundColor:"blue",
  },

  publishedView:{
    backgroundColor:'black',
    height:400,
    width:400,
  }
})