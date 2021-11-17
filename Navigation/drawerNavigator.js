import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Profile" component={ProfileScreen}/> 
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}