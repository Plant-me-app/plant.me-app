import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const TaskHistory = ({ route, navigation }): React.ReactElement => {
  const { task } = route?.params;

  useEffect(() => {
    console.log("task", task);
  });
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

export default TaskHistory;
