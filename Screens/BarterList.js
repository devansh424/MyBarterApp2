import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import firebase from "firebase";
import db from "../Config";
import { Header, Icon, ThemeConsumer } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class BarterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBarter: [],
    };
  }

  getBarters = () => {
    db.ref("barters").on("value", (data) => {
      var allBarters = [];
      var barters = data.val();
      console.log(barters);
      Object.keys(barters).forEach((key) => {
        allBarters.push({
          key: key,
          value: barters[key],
        });
      });
      this.setState({
        allBarter: allBarters,
      });
      console.log(allBarters);
    });
  };

  renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity style={styles.itemcontainer} onPress={()=>{this.props.navigation.navigate("UserDetail",{"item":item})}}>
          <Text style={styles.headingtext}>Object: {item.value.objectName}</Text>
          <Text style={styles.textstyle}>Reason: {item.value.reason}</Text>
          <Text style={styles.textstyle}>Cost/Barter Item: {item.value.costOrBarterItem}</Text>
        </TouchableOpacity>
    );
  };

  componentDidMount() {
    this.getBarters();
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidsafearea} />
        <SafeAreaProvider>
          <Header
            centerComponent={{
              text: "My Barter Screen",
              style: { color: "white", fontSize: 15, fontWeight: "bold" },
            }}
            leftComponent={() => {
              return <Icon onPress={()=>{this.props.navigation.toggleDrawer()}} name="bars" type="antdesign" color="white" />;
            }}
            rightComponent={()=>{
              return <Icon onPress={()=>{this.props.navigation.navigate("Notifications")}} name="bell" type="font-awesome" color="white" />
            }}
          />
          <FlatList
            data={this.state.allBarter}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          ></FlatList>
        </SafeAreaProvider>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#DDFFE7",
    borderRadius: 30,
    borderColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  itemcontainer: {
    alignItems: "center",
    backgroundColor: "#AAFFE9",
    borderRadius: 30,
    marginTop:20,
    marginHorizontal:10,
    borderWidth:1,
    borderColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  droidsafearea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textstyle:{
    fontSize:10,
    textAlign:"center"
  },
  headingtext:{
    fontSize:15,
    fontWeight:"bold",
    textAlign:"center"
  },
  button:{
    fontSize:14,
    textAlign:"center",
    margin:10,
    borderColor:"black",
    borderRadius:10,
    borderWidth:1,
    backgroundColor:"aqua",
    padding:10,
  }
});
