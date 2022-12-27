import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const NoPlantSelected = require("../../images/NoImgSelected.png");
const Pencil = require("../../images/Pencil.png");
const PlantImage = (): React.ReactElement => {
  return (
    <TouchableOpacity
      onPress={() => console.log("pressed")}
      style={styles.container}
    >
      <Image source={NoPlantSelected} style={styles.image} />
      <View style={styles.pencilContainer}>
        <Image source={Pencil} style={styles.pencil} />
      </View>
    </TouchableOpacity>
  );
};

export default PlantImage;
