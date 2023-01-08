import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import PlantCard from "../../components/PlantCard";
import SearchBar from "../../components/SearchBar";
import { Labels } from "../../constants/label.constants";
import { IPlant } from "../../constants/plant.interface";
import { getPlants } from "../../services/plant.service";
import { styles } from "./styles";

const HomeView = ({ navigation }): React.ReactElement => {
  const emptyScreen = require("../../assets/images/HomeEmpty.png");
  const arrowDown = require("../../assets/images/ArrowDown.png");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const loadWhenNavigate = navigation.addListener("focus", () => {
      loadPlants();
    });
    loadPlants();
    return loadWhenNavigate;
  }, [navigation]);

  const loadPlants = async () => {
    const response = await getPlants();
    setPlants(response.data.data);
  };

  const sortByCreatedDate = (a, b) => {
    let c = new Date(a.createdDate).getTime();
    let d = new Date(b.createdDate).getTime();
    return d - c;
  };

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
      {plants.length > 0 && (
        <ScrollView>
          <View style={styles.body}>
            {plants.sort(sortByCreatedDate).map((plant) => {
              return <PlantCard {...plant} />;
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeView;
