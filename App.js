import React from "react";
import LoginScreen from "./Screens/LoginAndSignUpScreen";
import DrawerNavigator from "./Navigation/drawerNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const SwitchNav = createSwitchNavigator({
  LoginScreen:LoginScreen,
  Home:DrawerNavigator,
});
const AppContainer = createAppContainer(SwitchNav);

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}