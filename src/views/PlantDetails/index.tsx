import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const editIcon = require("../../assets/images/Details/Edit.png");
const infoIcon = require("../../assets/images/Details/Info.png");
const level1Icon = require("../../assets/images/Details/Level1.png");

const fertilizerIcon = require("../../assets/images/Details/Tasks/Fertilizer.png");
const soilIcon = require("../../assets/images/Details/Tasks/Soil.png");
const sunIcon = require("../../assets/images/Details/Tasks/Sun.png");
const waterIcon = require("../../assets/images/Details/Tasks/Water.png");

const PlantDetails = ({ navigation }): React.ReactElement => {
  const plant = {
    name: "Juninha",
    image: 21,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={infoIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Infos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={level1Icon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Nível</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate("EditPlant", { edition: true })}
          >
            <Image source={editIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>Editar</Text>
          </TouchableOpacity>
        </View>
        <Image source={plant.image} style={styles.plantImg} />
        <Text style={styles.title}>{plant.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <View style={styles.taskContainer}>
            <Image source={waterIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>Água</Text>
            <View style={styles.statusBar} />
          </View>
          <View style={styles.taskContainer}>
            <Image source={soilIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>Terra</Text>
            <View style={styles.statusBar} />
          </View>
          <View style={styles.taskContainer}>
            <Image source={sunIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>Sol</Text>
            <View style={styles.statusBar} />
          </View>
          <View style={styles.taskContainer}>
            <Image source={fertilizerIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>Fertilizante</Text>
            <View style={styles.statusBar} />
          </View>
        </View>
        <View style={styles.historyContainer}>
          <TouchableOpacity>
            <Text>Ver Histórico</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlantDetails;
