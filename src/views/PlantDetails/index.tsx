import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";

const editIcon = require("../../assets/images/Details/Edit.png");
const infoIcon = require("../../assets/images/Details/Info.png");
const level1Icon = require("../../assets/images/Details/Level1.png");
const PlantDetails = (): React.ReactElement => {
  const plant = {
    name: "Juninha",
    image: 21,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <View style={styles.iconContainer}>
            <Image source={infoIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Infos</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={level1Icon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Nível</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={editIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Editar</Text>
          </View>
        </View>
        <Image source={plant.image} style={styles.plantImg} />
        <Text style={styles.title}>{plant.name}</Text>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default PlantDetails;
