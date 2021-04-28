import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import VirtualPage from "./pages/virtualpage";
import ProfileList from "./pages/profilelist";
import ProfilePage from "./pages/profilepage";
import SearchPage from "./pages/searchpage";
import ReviewPage from "./pages/reviewpage";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import Routes from "./pages/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
