import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Labels } from "../../constants/label.constants";
import { IPlant } from "../../constants/plant.interface";
import { styles } from "./styles";

const PlantCard = (plant): React.ReactElement => {
  useEffect(() => {
    console.log("plants", plant.name);
  });

  const B = (props) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={plant.image} style={styles.img} />
        <Text style={styles.title}>{plant.name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.info}>
          <B>{Labels.species}</B>: {plant.species.name}
        </Text>
        <Text style={styles.info}>
          <B>{Labels.size}</B>: {plant.size}
        </Text>
        <Text style={styles.info}>
          <B>{Labels.resistence}</B>: {plant.species.resistance}
        </Text>
        <Text style={styles.info}>
          <B>{Labels.poison}</B>: {plant.species.poison}
        </Text>
      </View>
    </View>
  );
};

export default PlantCard;
