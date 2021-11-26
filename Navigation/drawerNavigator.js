import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../Screens/ProfileScreen";
import LogOutScreen from "../Screens/LogOutScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tabNavigator";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator screenOptions={{headerShown:false}} >
                    <Drawer.Screen name="Home" component={TabNavigator}/>
                    <Drawer.Screen name="Profile" component={ProfileScreen}/>
                    <Drawer.Screen name="Notifications" component={NotificationScreen}/>
                    <Drawer.Screen name="LogOut" component={LogOutScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}