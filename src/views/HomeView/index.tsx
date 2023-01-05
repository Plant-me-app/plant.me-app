import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const HomeView = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minhas Plantas</Text>
      </View>
    </View>
  );
};

export default HomeView;
