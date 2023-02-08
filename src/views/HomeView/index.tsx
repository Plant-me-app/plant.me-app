import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import PlantCard from "../../components/PlantCard";
import SearchBar from "../../components/SearchBar";
import { Labels } from "../../constants/label.constants";
import { getPlants } from "../../services/plant.service";
import { sortByCreatedDate } from "../../utils/formatter.util";
import { styles } from "./styles";

const HomeView = ({ navigation }): React.ReactElement => {
  const emptyScreen = require("../../assets/images/HomeEmpty.png");
  const arrowDown = require("../../assets/images/ArrowDown.png");

  const [plants, setPlants] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(plants);

  useEffect(() => {
    const loadWhenNavigate = navigation.addListener("focus", () => {
      loadPlants();
    });
    loadPlants();
    return loadWhenNavigate;
  }, [navigation]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const loadPlants = async () => {
    const response = await getPlants();
    setPlants(response.data.data);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => loadPlants().then(() => setRefreshing(false)));
  }, []);

  const handleChange = (text) => {
    setSearch(text);
    setFiltered(
      plants.filter((plant) => {
        const lowerCaseName = plant.name.toLowerCase();
        return lowerCaseName.includes(text.toLowerCase());
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{Labels.homeHeader}</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar onChangeText={handleChange} input={search} />
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
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.body}>
              {sortByCreatedDate(filtered).map((plant, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("PlantDetails", { plant: plant })
                  }
                >
                  <PlantCard {...plant} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default HomeView;
