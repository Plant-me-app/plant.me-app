import React, { useEffect } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Labels } from "../../constants/label.constants";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../configs/colors";

const editIcon = require("../../assets/images/Details/Edit.png");
const infoIcon = require("../../assets/images/Details/Info.png");
const level1Icon = require("../../assets/images/Details/Level1.png");

const fertilizerIcon = require("../../assets/images/Details/Tasks/Fertilizer.png");
const soilIcon = require("../../assets/images/Details/Tasks/Soil.png");
const sunIcon = require("../../assets/images/Details/Tasks/Sun.png");
const waterIcon = require("../../assets/images/Details/Tasks/Water.png");

const PlantDetails = ({ navigation, route }): React.ReactElement => {
  const { plant } = route?.params;

  const onBack = () => {
    navigation.goBack();
  };

  const onEditPlant = () => {
    navigation.navigate("EditPlant", { edition: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity style={styles.backLabel} onPress={() => onBack()}>
          <MaterialIcons name="arrow-back-ios" size={18} color={Colors.dark} />
          <Text style={styles.link}>{Labels.goBack}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={infoIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>{Labels.infos}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={level1Icon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>{Labels.level}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => onEditPlant()}
          >
            <Image source={editIcon} style={styles.detailsIcons} />
            <Text style={styles.iconSubtitle}>{Labels.edit}</Text>
          </TouchableOpacity>
        </View>
        <Image source={plant.image} style={styles.plantImg} />
        <Text style={styles.title}>{plant.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.taskContainer}>
            <Image source={waterIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>{Labels.water}</Text>
            <View style={styles.statusBar} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskContainer}>
            <Image source={soilIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>{Labels.soil}</Text>
            <View style={styles.statusBar} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskContainer}>
            <Image source={sunIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>{Labels.sun}</Text>
            <View style={styles.statusBar} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskContainer}>
            <Image source={fertilizerIcon} style={styles.taskIcon} />
            <Text style={styles.iconSubtitle}>{Labels.fertilizer}</Text>
            <View style={styles.statusBar} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.link}>{Labels.seeHistory}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlantDetails;
