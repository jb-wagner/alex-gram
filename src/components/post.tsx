import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as models from "../models";

interface Props {
  post: models.Post;
}

interface State {}

export default class Post extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.post}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={{ uri: this.props.post.user.image }}
            resizeMode="cover"
          />
          <Text style={styles.userName}>{this.props.post.user.name}</Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: this.props.post.image }}
          resizeMode="cover"
        />
        <Text style={styles.caption}>{this.props.post.caption}</Text>
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  post: {
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 0.24,
    flex: 1,
    borderTopWidth: 1,
    borderColor: "lightgray",
    paddingTop: 5
  },
  caption: {
    fontSize: 13,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center"
  },
  image: {
    shadowOffset: {
      width: 0,
      height: 0
    },
    alignSelf: "stretch",
    height: 250
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  userContainer: {
    margin: 4,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  userName: {
    marginLeft: 10
  }
});
