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
  Alert
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from "../Config.js"
import firebase from "firebase";

export default class UserDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason:this.props.route.params.item.value.reason,
      costOrBarterItem:this.props.route.params.item.value.costOrBarterItem,
      email: "",
      username: "",
      address: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      name: "",
      image: "",
      profile_picture:"",
      objectName:this.props.route.params.item.value.objectName,
      requesterId:this.props.route.params.item.value.requesterId
    };
  }

  showInterest = () => {
    db.ref("barterInterest/" + this.props.route.params.item.value.barterId).update({
        objectName:this.state.objectName,
        reason:this.state.reason,
        costOrBarterItem:this.state.costOrBarterItem,
        interestedBuyerId:firebase.auth().currentUser.uid,
        //requester is a person who we are requesting to.
        requesterId:this.props.route.params.item.value.requesterId,
        acknowledgement:false
    }).then(()=>{
        Alert.alert("Barter request is made with " + this.state.name + "!");
        this.props.navigation.navigate("BarterList");
    })
  }

  fetchUser = () => {
    db.ref("users/" + this.state.requesterId).on("value", (data) => {
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
    console.log(this.props.route.params.item.value.requesterId)
    if(this.state.image===""){
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <SafeAreaProvider>
            <Header
              centerComponent={{
                text: "Barter Details Screen",
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
              text: "Barter Details Screen",
              style: { color: "white", fontSize: 15, fontWeight: "bold" },
            }}
            leftComponent={() => {
              return <Icon name="bars" type="antdesign" color="white" />;
            }}
          />

          <Text style={styles.apptitle}>ObjectName: {this.state.objectName}</Text>
          <Text style={styles.apptitle}>cost/Barter Item: {this.state.costOrBarterItem}</Text>
          <Text style={styles.apptitle}>Name: {this.state.name}</Text>
          <Text style={styles.apptitle}>Email: {this.state.email}</Text>
          <Text style={styles.apptitle}>Address: {this.state.address}</Text>
          <Text style={styles.apptitle}>PhoneNumber: {this.state.phoneNumber}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{
              this.showInterest()
          }} disabled={this.state.requesterId===firebase.auth().currentUser.uid? true : false}>
              <Text>
                  Buy/Barter
              </Text>
          </TouchableOpacity>
          
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
  },
  button:{
    marginTop:40,
    backgroundColor:"#98D7C2",
    color:"black",
    padding:20,
    margin:10,
    borderWidth:1,
    borderColor:"#167D7F",
    borderRadius:10,
    alignSelf:"center"
},
});
