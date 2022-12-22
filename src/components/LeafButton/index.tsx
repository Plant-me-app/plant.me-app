import React from "react";
import { Image, View } from "react-native";
import { Colors } from "../../configs/colors";
import { styles } from "./styles";

const LeafButton = ({ isFocused = false }): React.ReactElement => {
  const leaf = require("../../images/Leaf.png");
  const buttonStyle = isFocused
    ? { ...styles.leafButton, backgroundColor: Colors.green_android }
    : { ...styles.leafButton, backgroundColor: Colors.green_hunter };

  return (
    <View style={buttonStyle}>
      <Image source={leaf} style={styles.leafIcon} />
    </View>
  );
};

export default LeafButton;
