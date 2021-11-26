import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BarterScreen from "../Screens/BarterList";
import UserDetailScreen from "../Screens/UserDetailScreem";
import NotificationScreen from "../Screens/NotificationScreen";

var Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen component={BarterScreen} name="BarterList"/>
                <Stack.Screen component={UserDetailScreen} name="UserDetail"/>
                <Stack.Screen component={NotificationScreen} name="Notifications"/>
            </Stack.Navigator>
        );
    }
}