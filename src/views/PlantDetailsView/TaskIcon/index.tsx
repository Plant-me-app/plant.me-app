import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface ITask {
  icon: any;
  label: string;
  onPress?: () => void;
}

const TaskIcon = ({ icon, label, onPress }: ITask): React.ReactElement => (
  <TouchableOpacity style={styles.taskContainer} onPress={onPress}>
    <Image source={icon} style={styles.taskIcon} />
    <Text style={styles.iconSubtitle}>{label}</Text>
    <View style={styles.statusBar} />
  </TouchableOpacity>
);

export default TaskIcon;
