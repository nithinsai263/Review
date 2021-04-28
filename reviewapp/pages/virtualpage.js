import React from "react";

import { StyleSheet, Text, View } from "react-native";

import Card from "../components/card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Search Result Page</Text>
      </View>
      <Card
        title='Netflix'
        subtitle='A Platform to watch movies'
        rating='3.5'
        image={require("../assets/netflix.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#fff",
    marginTop: 25,
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 15,
    marginBottom: 25,
  },
});
