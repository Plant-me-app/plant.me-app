import RootNavigator from "./src/routes/navigation/rootNavigator";
import * as React from "react";
import StorybookUIRoot from "./storybook";
import SplashView from "./src/views/SplashView";
import { useState } from "react";

export default function App() {
  const [showSplashScreen, setSplashScreen] = useState(true);
  console.log("showSplashScreen app:", showSplashScreen)

  return showSplashScreen ? <SplashView showSplashScreen = {showSplashScreen} setSplashScreen={() => setSplashScreen}/>
  : <RootNavigator />;
}

function Storybook() {
  return <StorybookUIRoot />;
}

function Home() {
  return <RootNavigator />;
}
