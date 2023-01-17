import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Labels } from "../../../constants/label.constants";
import { styles } from "./styles";

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const InfoContent = ({ plant }): React.ReactElement => (
  <View>
    <View style={styles.infoHeader}>
      <Text style={styles.infoTitle}>
        {Labels.informations} {plant.name}
      </Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoContentText}>
        <B>{Labels.species}:</B> {plant.species.name}
      </Text>
      <Text style={styles.infoContentText}>
        <B>{Labels.watering}:</B> {plant.species.water.amount} /{" "}
        {plant.species.water.cicle}
      </Text>
      <Text style={styles.infoContentText}>
        <B>{Labels.light}:</B> {plant.species.light}
      </Text>
      <Text style={styles.infoContentText}>
        <B>{Labels.changeSoil}:</B> {plant.species.soil.amount} /{" "}
        {plant.species.soil.cicle}: {plant.species.soil.season}
      </Text>
      <Text style={styles.infoContentText}>
        <B>{Labels.fertilizer2}:</B> {plant.species.fertilization.amount} /{" "}
        {plant.species.fertilization.cicle}:{" "}
        {plant.species.fertilization.season}
      </Text>
    </View>
  </View>
);

export default InfoContent;
