import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { Labels } from "../../constants/label.constants";
import { getPlants } from "../../services/plant.service";
import { styles } from "./styles";

const HomeView = ({ navigation }): React.ReactElement => {
  const emptyScreen = require("../../images/HomeEmpty.png");
  const arrowDown = require("../../images/ArrowDown.png");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const plants = async () => {
      const result = await getPlants();
      console.log("result", result.data.data);
      setPlants(result.data.data);
    };
    const getsPlants = navigation.addListener("focus", () => {
      plants();
    });
    plants();
    return getsPlants;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{Labels.homeHeader}</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      {plants.length === 0 && (
        <View style={styles.emptyBody}>
          <Image source={emptyScreen} style={styles.emptyImage} />
          <View style={styles.labelContainer}>
            <Text style={styles.emptyLabel}>{Labels.emptyHomeLabel}</Text>
            <Image source={arrowDown} style={styles.arrowIcon} />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeView;
