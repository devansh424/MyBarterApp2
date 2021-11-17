import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import Header from "../Component/Header";
import firebase from "firebase";
import db from "../Config";

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>
                <Header text="Profile Screen"/>
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
})