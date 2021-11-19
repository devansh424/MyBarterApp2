import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddBarterScreen from "../Screens/AddBarter";
import BarterScreen from "../Screens/BarterList";

var Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen component={BarterScreen} name="BarterList"/>
                <Tab.Screen component={AddBarterScreen} name="AddBarter"/>
            </Tab.Navigator>
        );
    }
}