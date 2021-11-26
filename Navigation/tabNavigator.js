import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddBarterScreen from "../Screens/AddBarter";
import StackNavigator from "./stackNavigator";

var Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen component={StackNavigator} name="Stack"/>
                <Tab.Screen component={AddBarterScreen} name="AddBarter"/>
            </Tab.Navigator>
        );
    }
}