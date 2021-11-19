import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import firebase from "firebase";
import db from "../Config";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AddBarterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            objectName:"",
            reason:"",
            costOrBarterItem:""
        }
    }

    addBarter = () => {
        var randomIdBarter = Math.random().toString(32).substring(2);
        db.ref("barters/" + randomIdBarter).update({
            objectName:this.state.objectName,
            reason:this.state.reason,
            costOrBarterItem:this.state.costOrBarterItem,
            barterId:randomIdBarter
        })
    }

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

                    <TextInput placeholder={"Object Name"} onChangeText={(text)=>{this.setState({objectName:text})}} style={styles.textinput}>

                    </TextInput>
                    <TextInput placeholder={"Reason"} onChangeText={(text)=>{this.setState({reason:text})}} style={styles.textinput}>

                    </TextInput>
                    <TextInput placeholder={"Cost/Barter Item"} onChangeText={(text)=>{this.setState({costOrBarterItem:text})}} style={styles.textinput}>

                    </TextInput>

                    <TouchableOpacity onPress={()=>{this.addBarter()}}>
                        <Text>
                            Submit
                        </Text>
                    </TouchableOpacity>
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