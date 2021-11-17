import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import firebase from "firebase";
import db from "../Config";

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#29A0B1",
        justifyContent:"center"
    },
    text:{
        color:"#167D7F",
        fontSize:20,
        
    },
})