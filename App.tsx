import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/routes/navigation/rootNavigator";

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * Storybook
 */

// import * as React from 'react';
// import StorybookUIRoot from './storybook';

// export default function LinksScreen() {
//   return <StorybookUIRoot />;
// }
