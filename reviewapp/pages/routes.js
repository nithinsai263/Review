import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import Login from "./login";
import Signup from "./signup";
import Profilelist from "./profilelist";
import Profilepage from "./profilepage";
import ReviewPage from "./reviewpage";
import Searchpage from "./searchpage";
import Searchresult from "./virtualpage";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={Signup} />
    </Stack.Navigator>
  );
  const Signupstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='signup' component={Signup} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='bye' component={Bye} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Find'
          component={Searchpage}
          options={{
            title: "Find",
          }}
        />
        <Tab.Screen
          name='Add'
          component={Profilepage}
          options={{
            title: "Add",
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profilelist}
          options={{
            title: "Profile",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
