import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { PlantContext } from "../../../contexts/PlantContext";
import { styles } from "./styles";

const TaskHistory = ({ route, navigation }): React.ReactElement => {
  const { task } = route?.params;
  const { plantContext } = useContext(PlantContext);

  const Content = () => {
    const historyList = plantContext.details[task.toLowerCase()].history;
    return (
      <View style={styles.historyList}>
        {historyList &&
          historyList.map((history) => (
            <Text key={history} style={styles.historyText}>
              {history}
            </Text>
          ))}
        {historyList.length === 0 && (
          <Text style={styles.historyText}>Nenhum registro encontrado</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
};

export default TaskHistory;
