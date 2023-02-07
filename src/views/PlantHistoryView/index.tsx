import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Colors } from "../../configs/colors";
import { Labels } from "../../constants/label.constants";

const PlantHistoryView = (): React.ReactElement => {
  const navigation = useNavigation();
  useEffect(() => {});

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity style={styles.backLabel} onPress={() => onBack()}>
          <MaterialIcons name="arrow-back-ios" size={18} color={Colors.white} />
          <Text style={styles.link}>{Labels.goBack}</Text>
        </TouchableOpacity>
      </View>
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
