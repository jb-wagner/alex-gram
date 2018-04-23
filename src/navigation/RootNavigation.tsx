import React from "react";
import { StackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal"
      }
    })
  }
);

export class NavigationOptions {
  header?: any = undefined;
  title: string = "";
}

export default class RootNavigator extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <RootStackNavigator />;
  }
}
