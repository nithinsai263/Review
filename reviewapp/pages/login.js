import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { Component } from "react";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
const windowHeight = Dimensions.get("window").height;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.page6container}>
        <ScrollView>
          <View style={styles.page6heading}>
            <Text style={styles.page6headingotp}>Login</Text>
            <Text style={styles.page6headingotp2}>Login to explore</Text>
          </View>
          <View style={styles.page6inputwrapper}>
            <TextInput
              placeholder='Email'
              placeholderTextColor='#776e6e'
              style={styles.page6Namewrapper}
            ></TextInput>
            <TextInput
              placeholder='Password'
              placeholderTextColor='#776e6e'
              style={styles.page6Emailwrapper}
            ></TextInput>
          </View>
          <View style={styles.page6buttoncontainer}>
            <TouchableNativeFeedback>
              <View style={styles.page6Continuecontainer}>
                <Text style={styles.page6Continuebutton}>Continue</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page6container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FCCF08",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    overflow: "hidden",
  },

  profileimgcontainer: {
    width: "100%",
    height: windowHeight,
    resizeMode: "cover",
  },
  page6heading: {
    alignItems: "center",
    marginTop: 60,
  },
  page6headingotp: {
    fontSize: 28,
    color: "#fff",
  },
  page6headingotp2: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    width: 250,
    marginTop: 15,
  },
  page6inputwrapper: {
    marginTop: 75,
    alignItems: "center",
  },
  page6Namewrapper: {
    width: "70%",
    height: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFFFFF",
  },
  page6Emailwrapper: {
    width: "70%",
    height: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFFFFf",
    marginTop: 75,
  },
  page6buttoncontainer: {
    marginTop: 30,
    alignItems: "center",
  },
  page6Continuecontainer: {
    width: 233,
    height: 66,
    backgroundColor: "#FFCF08",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  page6Continuebutton: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
