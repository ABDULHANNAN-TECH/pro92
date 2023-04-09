import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator.js";
import TabNavigator from "./navigation/TabNavigator.js";

export default function App() {
  return (
    <NavigationContainer>
     
      <TabNavigator/>
    </NavigationContainer>
  );
}
