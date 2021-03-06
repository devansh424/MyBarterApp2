import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from "../Config.js"
import firebase from "firebase";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      address: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      name: "",
      image: "",
      profile_picture:""
    };
  }

  fetchUser = () => {
    db.ref("users/" + firebase.auth().currentUser.uid).on("value", (data) => {
      this.setState({
        name: data.val().firstName + " " + data.val().lastName,
        email: data.val().email,
        phoneNumber: data.val().phoneNumber,
        username: data.val().username,
        address: data.val().address,
        image: data.val().profile_picture,
      });
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    if(this.state.image===""){
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <SafeAreaProvider>
            <Header
              centerComponent={{
                text: "Profile Screen",
                style: { color: "white", fontSize: 15, fontWeight: "bold" },
              }}
              leftComponent={() => {
                return <Icon onPress={()=>{this.props.navigation.toggleDrawer()}} name="bars" type="antdesign" color="white" />;
              }}
              rightComponent={()=>{
                return <Icon onPress={()=>{this.props.navigation.navigate("Notifications")}} name="bell" type="font-awesome" color="white" />
              }}
            />
  
            <Text style={styles.apptitle}>Loading...</Text>
          </SafeAreaProvider>
        </View>
      );
    }else{
      console.log(this.state.image);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <SafeAreaProvider>
          <Header
            centerComponent={{
              text: "Profile Screen",
              style: { color: "white", fontSize: 15, fontWeight: "bold" },
            }}
            leftComponent={() => {
              return <Icon name="bars" type="antdesign" color="white" />;
            }}
          />

          <Image source={{uri:this.state.image}} style={styles.image}/>

          <Text style={styles.apptitle}>Name: {this.state.name}</Text>
          <Text style={styles.apptitle}>Email: {this.state.email}</Text>
          <Text style={styles.apptitle}>Address: {this.state.address}</Text>
          <Text style={styles.apptitle}>PhoneNumber: {this.state.phoneNumber}</Text>
        </SafeAreaProvider>
      </View>
    );
  }
}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDFFE7",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  apptitle: {
    color: "#15193c",
    marginLeft: 10,
    fontSize: 14,
    marginTop: 20,
  },
  text: {
    color: "#15193c",
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
