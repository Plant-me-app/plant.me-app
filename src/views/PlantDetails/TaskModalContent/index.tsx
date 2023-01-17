import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ITaskContent {
  plant?: {};
  headerTitle: string;
  onPress?: () => void;
  history: string;
  btnTitle: string;
}

const TaskModalContent = ({
  plant,
  headerTitle,
  onPress,
  history,
  btnTitle,
}: ITaskContent): React.ReactElement => (
  <View>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.history}>Última Rega: {history}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default TaskModalContent;
