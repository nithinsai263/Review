import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Review from "../components/reviewComponent";

export default function reviewpage() {
  const [review, Setreview] = useState(true);
  const [reviewvalue, Setreviewvalue] = useState("");
  const listing = [
    {
      id: 1,
      name: "Ankit Kumar",
      stars: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
    },

    {
      id: 2,
      name: "Nithinsai",
      stars: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
    },

    {
      id: 3,
      name: "Rounak Sharma",
      stars: 1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
    },

    {
      id: 4,
      name: "Tarun Acharya",
      stars: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adipiscing elit.  A eni scelerisque id id. Lorem ipsum d",
    },
  ];

  const photos = [
    { image: require("../assets/netflix.png"), id: 1 },
    { image: require("../assets/netflix.png"), id: 2 },
    { image: require("../assets/netflix.png"), id: 3 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            style={styles.image}
            source={require("../assets/netflix.png")}
          />

          <View style={styles.description}>
            <Text>About</Text>
            <View style={styles.descriptioncontainer}>
              <Text style={{ flex: 5 }}>
                The platform where we can watch movies and have a funtime with
                yo homies beeyatchhh
              </Text>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Image
                  source={require("../assets/star.png")}
                  style={styles.star}
                />
                <Text>3/5</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Your Review</Text>
            <TextInput
              style={{
                borderColor: "#000000",
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}
              onChangeText={(text) => Setreviewvalue(text)}
            />
            <View style={{ alignItems: "flex-end", marginTop: 15 }}>
              <TouchableOpacity onPress={() => console.log(reviewvalue)}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 25,
              marginTop: 45,
            }}
          >
            <TouchableOpacity onPress={() => Setreview(true)}>
              <Text>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Setreview(false)}>
              <Text>Photos</Text>
            </TouchableOpacity>
          </View>
          {review === true && (
            <FlatList
              data={listing}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <Review
                  name={item.name}
                  stars={item.stars}
                  review={item.review}
                />
              )}
            ></FlatList>
          )}
          {review === false && (
            <FlatList
              data={photos}
              keyExtractor={(photo) => photo.id.toString()}
              renderItem={({ item }) => (
                <Image source={item.image} style={{ width: "100%" }} />
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 25,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
  },
  description: {
    marginTop: 15,
    marginBottom: 15,
  },
  descriptioncontainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  star: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
});
