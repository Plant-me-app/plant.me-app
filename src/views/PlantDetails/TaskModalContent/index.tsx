import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../configs/colors";
import { Messages } from "../../../constants/messages.constants";
import { TaskTypes } from "../../../constants/taskTypes.enum";
import { styles } from "./styles";
import { customStyles } from "./styles";

interface ITaskContent {
  plant?: {};
  plantName?: string;
  onPress?: () => void;
  history?: string;
  taskType?: TaskTypes;
  isButtonVisible?: boolean;
  isSuccess?: boolean;
}

const waterIcon = require("../../../assets/images/Details/TasksModal/Water.png");
const soilIcon = require("../../../assets/images/Details/TasksModal/Soil.png");
const sunIcon = require("../../../assets/images/Details/TasksModal/Sun.png");
const fertilizerIcon = require("../../../assets/images/Details/TasksModal/Fertilizer.png");

const TaskModalContent = ({
  plant,
  plantName,
  onPress,
  history,
  taskType,
  isButtonVisible = true,
  isSuccess = false,
}: ITaskContent): React.ReactElement => {
  const content = {
    [TaskTypes.Water]: {
      headerTitle: "Rega",
      btnTitle: "Regar",
      color: Colors.water,
      icon: waterIcon,
      subtitle: "Última Rega",
    },
    [TaskTypes.Soil]: {
      headerTitle: "Troca de Terra",
      btnTitle: "Trocar Terra",
      color: Colors.soil,
      icon: soilIcon,
      subtitle: "Última Troca de Terra",
    },
    [TaskTypes.Light]: {
      headerTitle: "Luz Solar",
      btnTitle: "Iluminar",
      color: Colors.sun,
      icon: sunIcon,
      subtitle: "Última Exposição à Luz",
    },
    [TaskTypes.Fertilizer]: {
      headerTitle: "Adubo",
      btnTitle: "Adubar",
      color: Colors.fertilizer,
      icon: fertilizerIcon,
      subtitle: "Última Adubagem",
    },
  };

  const [currentTask, setCurrentTask] = useState(content[taskType]);

  const loadContent = () => {
    const selectedTask = content[taskType];
    setCurrentTask(selectedTask);
  };

  useEffect(() => {
    loadContent();
  }, [taskType]);

  return (
    <View>
      <View style={styles.header}>
        <Image source={currentTask.icon} style={styles.icon} />
        <Text style={styles.headerTitle}>{currentTask.headerTitle}</Text>
      </View>
      <View style={styles.body}>
        {!isSuccess && (
          <Text style={styles.history}>
            {currentTask.subtitle}: {history}
          </Text>
        )}
        {isSuccess && (
          <Text style={styles.success}>
            {Messages.good} {plantName} {Messages.taskSuccess}
          </Text>
        )}
        {isButtonVisible && (
          <TouchableOpacity
            onPress={onPress}
            style={customStyles(currentTask.color).button}
          >
            <Text style={styles.btnTitle}>{currentTask.btnTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TaskModalContent;
