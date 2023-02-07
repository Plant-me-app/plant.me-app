import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const PlantHistoryView = (): React.ReactElement => {
  useEffect(() => {});
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Juninha</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Histórico</Text>
      </View>
    </View>
  );
};

export default PlantHistoryView;
