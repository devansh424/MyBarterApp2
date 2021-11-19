import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert, FlatList} from "react-native";
import firebase from "firebase";
import db from "../Config";
import { Header, Icon, ThemeConsumer } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class BarterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allBarter:[]
        }
    }

    getBarters = () => {
        db.ref("barters").on("value",data=>{
            var allBarters = []
            var barters = data.val()
            console.log(barters)
            Object.keys(barters).forEach((key)=>{
                allBarters.push({
                    key:key,
                    value:barters[key]
                });
            });
            this.setState({
                allBarter:allBarters
            });
            console.log(allBarters)
        });
    }

    renderItem = ({item,index}) => {
        return(
            <View>
                <Text>
                    {item.value.objectName}
                </Text>
            </View>
        );
    }

    componentDidMount(){
        this.getBarters()
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
                    <FlatList data={this.state.allBarter} keyExtractor={(item,index)=>index.toString()} renderItem={this.renderItem}>

                    </FlatList>
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