import React from "react";
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Platform, StatusBar, SafeAreaView, Alert} from "react-native";
import firebase from "firebase";
import db from "../Config";
import Header from "../Component/Header";

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            username:"",
            address:"",
            phonenumber:"",
            signuppressed:false,
            confirmPassword:"",
            firstName:"",
            lastName:"",
            address:"",
            phoneNumber:"",
        }
    }

    login = () => {
        if(this.state.email && this.state.password){
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((response)=>{
                if(response){
                    console.log("you have loggedin.");
                    this.props.navigation.navigate("Home")
                }
            }).catch((error)=>{
                return Alert.alert(error.message);
            })
        }else{
            return Alert.alert("Please give the email and password");
        }
    }

    signUp = () => {
        if(this.state.password === this.state.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((response)=>{
                if(response){
                    var randomId = Math.random().toString(26).substring(2);
                    db.ref("users/" + randomId).update({
                        firstName:this.state.firstName,
                        lastName:this.state.lastName,
                        address:this.state.address,
                        phoneNumber:this.state.phoneNumber,
                        email:this.state.email
                    });
                    return Alert.alert("user added.")
                }
            }).catch((error)=>{
                return Alert.alert(error.message);
            })
        }else{
            return Alert.alert("password dont match.")
        }
    }



    render(){
        if(this.state.signuppressed===false){
            return(
                <View style={styles.container}>
                    <Header text="Login Screen"/>
                    <SafeAreaView styles={styles.droidsafearea}/>
                    <TextInput placeholder={"email"} onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}
                    value={this.state.email}
                    style={styles.textinput}
                    ></TextInput>
                    <TextInput placeholder={"password"} onChangeText={(text) =>{
                        this.setState({
                            password:text
                        })
                    }}
                    value={this.state.password}
                    style={styles.textinput}
                    secureTextEntry={true}
                    ></TextInput>
                    <TouchableOpacity onPress={()=>{this.login()}} style={styles.button}>
                        <Text>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({
                        signuppressed:true,
                    })}} 
                    style={styles.button}>
                        <Text>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }else{
            return(
                <View style={styles.container}>
                    <SafeAreaView styles={styles.droidsafearea}/>
                    <Header text="SignUp Screen"/>
                    <TextInput placeholder={"email"} onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}
                    value={this.state.email}
                    style={styles.textinput}
                    ></TextInput>
                    <TextInput placeholder={"password"} onChangeText={(text) =>{
                        this.setState({
                            password:text
                        })
                    }}
                    value={this.state.password}
                    style={styles.textinput}
                    secureTextEntry={true}
                    ></TextInput>
                    <TextInput placeholder={"confirm password"} onChangeText={(text) =>{
                        this.setState({
                            confirmPassword:text
                        })
                    }}
                    value={this.state.confirmPassword}
                    style={styles.textinput}
                    secureTextEntry={true}
                    ></TextInput>
                    <TextInput placeholder={"first name"} onChangeText={(text) =>{
                        this.setState({
                            firstName:text
                        })
                    }}
                    value={this.state.firstName}
                    style={styles.textinput}
                    ></TextInput>
                    <TextInput placeholder={"last name"} onChangeText={(text) =>{
                        this.setState({
                            lastName:text
                        })
                    }}
                    value={this.state.lastName}
                    style={styles.textinput}
                    ></TextInput>
                    <TextInput placeholder={"address"} onChangeText={(text) =>{
                        this.setState({
                            address:text
                        })
                    }}
                    value={this.state.address}
                    style={styles.textinput}
                    ></TextInput>
                    <TextInput placeholder={"Phone Number"} onChangeText={(text) =>{
                        this.setState({
                            phoneNumber:text
                        })
                    }}
                    value={this.state.phoneNumber}
                    style={styles.textinput}
                    ></TextInput>
                    <TouchableOpacity onPress={()=>{this.signUp()}} style={styles.button}>
                        <Text>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({
                        signuppressed:false,
                    })}} 
                    style={styles.button}>
                        <Text>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
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
});