import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import Header from "../Component/Header";
import firebase from "firebase";
import db from "../Config";

export default class AddBarterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            objectName:"",
            reason:"",
            costOrBarterItem:""
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>
                <Header text="My Barter Screen"/>

                <TextInput placeholder={"Object Name"} onChangeText={(text)=>{this.setState({objectName:text})}} style={styles.textinput}>

                </TextInput>
                <TextInput placeholder={"Reason"} onChangeText={(text)=>{this.setState({reason:text})}} style={styles.textinput}>

                </TextInput>
                <TextInput placeholder={"Cost/Barter Item"} onChangeText={(text)=>{this.setState({costOrBarterItem:text})}} style={styles.textinput}>

                </TextInput>

                <TouchableOpacity>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#DDFFE7",
        justifyContent:"center"
    },
    droidsafearea:{
        marginTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },
    text:{
        
    },
    button:{
        backgroundColor:"#98D7C2",
        color:"black",
        padding:20,
        margin:10,
        borderWidth:1,
        borderColor:"#167D7F",
        borderRadius:10,
        alignSelf:"center"
    },
    textinput:{
        color:"#167D7F",
        padding:15,
        margin:10,
        borderWidth:1,
        borderRadius:10,
    }
})