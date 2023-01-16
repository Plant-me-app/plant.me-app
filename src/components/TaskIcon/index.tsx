import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const TaskIcon = ({ icon, label }): React.ReactElement => (
  <TouchableOpacity style={styles.taskContainer}>
    <Image source={icon} style={styles.taskIcon} />
    <Text style={styles.iconSubtitle}>{label}</Text>
    <View style={styles.statusBar} />
  </TouchableOpacity>
);

export default TaskIcon;
