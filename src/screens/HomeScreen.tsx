import React from "react";
import {
  Platform,
  StyleSheet,
  ListView,
  ListViewDataSource,
  View,
  RefreshControl,
  ViewStyle
} from "react-native";
import { NavigationOptions } from "../navigation/RootNavigation";
import * as models from "../models";
import Post from "../components/post";

interface Props {}

interface State {
  feed: models.Feed;
  refreshing: boolean;
}

export default class HomeScreen extends React.Component<Props, State> {
  static navigationOptions: NavigationOptions = {
    title: "Home"
  };

  private ds: ListViewDataSource = new ListView.DataSource({
    rowHasChanged: (r1: any, r2: any) => {
      return r1 !== r2;
    }
  });

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ feed: new models.Feed(), refreshing: false });
    this.onRefresh();
  }

  private onRefresh() {
    setTimeout(
      (() => {
        let feed = new models.Feed();
        feed.posts = models.postGenerator();

        this.setState({ feed: feed, refreshing: false });
      }).bind(this),
      Math.floor(Math.random() * 750) + 250
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.ds.cloneWithRows(this.state.feed.posts)}
          renderRow={(post: models.Post) => <Post post={post} />}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  } as ViewStyle,
  listView: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  }
});
