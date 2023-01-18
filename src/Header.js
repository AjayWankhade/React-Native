import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Header extends React.Component {
   render() {
      return (
         <View style={styles.header}>

<marquee><Text style={{backgroundColor:'white',fontWeight:'bolder',padding:'10px',}}>Simple Ui In React Native</Text></marquee>
         </View>
      );
   }
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      width:'100%',
      height:'15%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"skyblue"
   },
});