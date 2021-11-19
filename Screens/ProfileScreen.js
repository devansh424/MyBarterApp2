import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import firebase from "firebase";
import db from "../Config";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidsafearea}/>
                <SafeAreaProvider>
                    <Header centerComponent={{text:"My Barter Screen",style:{color:"white",fontSize:15,fontWeight:"bold"}}} 
                    leftComponent={()=>{
                        return(
                            <Icon name="bars" type="antdesign" color="white"/>
                        );
                    }}/>
                </SafeAreaProvider>
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