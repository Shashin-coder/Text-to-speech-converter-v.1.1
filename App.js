import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';
import * as Speech from "expo-speech";

export default class App extends React.Component{
constructor()
{
super();
this.state={
    TextEntered:"",
  }}
  speak=(speech)=>{
    var thingstospeak=speech;
    Speech.speak(thingstospeak);
    }
render(){
  return(
    <View style={styles.container}>
     <Image style={{height:150,width:200}} source={require("./assets/language-icon.png")}/>
       <Text style={styles.TitleTextStyle}> Text To Speech Converter</Text>
     <TextInput
        style={ styles.inputStyle}
        placeholder={"Enter the word here to hear the pronunciation."}
        onChangeText={(text) => {this.setState({TextEntered:text})}}
        value={this.state.TextEntered}
     />

<TouchableOpacity style={styles.buttonStyle}  
onPress={()=>{
var lowerCase=this.state.TextEntered.toLowerCase().trim();
this.speak(lowerCase);
}} >
<Text style={styles.buttonTextStyle}>Speak</Text>
</TouchableOpacity>
</View>
  )
}}

const styles = StyleSheet.create({

 container: {

  flex: 1,

  backgroundColor: '#fff',

  alignItems: 'center',

  justifyContent: 'center',

 },

 inputStyle:{

  width: "30%",

  height: 35,

  alignSelf: "center",

  borderColor: "#58bbf4",

  borderRadius: 30,

  borderWidth: 3,

  marginTop: 20,

  padding: 10

 },

 buttonStyle: {

  width: 200,

  height: 40,
color:"#58bbf4",
  alignItems: "center",

  justifyContent: "center",

  borderWidth: 1,

  borderRadius: 10,

  marginTop: 30

 },

 buttonTextStyle: {

  color: "#00ddff",

  fontSize: 30,

  fontWeight: "bold"

 },
 TitleTextStyle:{
   color:"#225763",
   fontSize:"250%",
  fontWeight: "bold"

 }

});
