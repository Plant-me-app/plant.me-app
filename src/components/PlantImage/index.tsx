import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Avatars } from "../AvatarModal/Avatars";
import { styles } from "./styles";

const NoPlantSelected = require("../../assets/images/NoImgSelected.png");
const Pencil = require("../../assets/images/Pencil.png");

interface PlantImage {
  onPress: () => void;
  avatar?: string;
}
const PlantImage = ({ onPress, avatar }): React.ReactElement => {
  const seleted = avatar ?? NoPlantSelected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={avatar ? styles.containerSelected : styles.container}
    >
      <Image
        source={seleted}
        style={avatar ? styles.imageSelected : styles.image}
      />
      <View style={styles.pencilContainer}>
        <Image source={Pencil} style={styles.pencil} />
      </View>
    </TouchableOpacity>
  );
};

export default PlantImage;
