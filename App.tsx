import RootNavigator from "./src/routes/navigation/rootNavigator";
import * as React from "react";
import StorybookUIRoot from "./storybook";

export default function App() {
  return <RootNavigator />;
}

function Storybook() {
  return <StorybookUIRoot />;
}

function Home() {
  return <RootNavigator />;
}
