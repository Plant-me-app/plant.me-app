import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../configs/colors";
import { TaskTypes } from "../../../constants/taskTypes.enum";
import { styles } from "./styles";

interface ITaskContent {
  plant?: {};
  headerTitle: string;
  onPress?: () => void;
  history: string;
  btnTitle: string;
  taskType?: TaskTypes;
}

const waterIcon = require("../../../assets/images/Details/TasksModal/Water.png");
const soilIcon = require("../../../assets/images/Details/TasksModal/Soil.png");
const sunIcon = require("../../../assets/images/Details/TasksModal/Sun.png");
const fertilizerIcon = require("../../../assets/images/Details/TasksModal/Fertilizer.png");

const TaskModalContent = ({
  plant,
  headerTitle,
  onPress,
  history,
  btnTitle,
  taskType,
}: ITaskContent): React.ReactElement => {
  const [currentTask, setCurrentTask] = useState(null);

  const loadContent = () => {
    const content = {
      [TaskTypes.Water]: {
        color: Colors.water,
        icon: waterIcon,
      },
      [TaskTypes.Soil]: {
        color: Colors.soil,
        icon: soilIcon,
      },
      [TaskTypes.Light]: {
        color: Colors.sun,
        icon: sunIcon,
      },
      [TaskTypes.Fertilizer]: {
        color: Colors.fertilizer,
        icon: fertilizerIcon,
      },
    };
    console.log("taskType", taskType);
    const selectedTask = content[taskType];
    setCurrentTask(selectedTask);
  };

  useEffect(() => {
    loadContent();
    console.log("content", currentTask);
  }, [taskType]);

  return (
    <View>
      <View style={styles.header}>
        <Image source={waterIcon} style={styles.icon} />
        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.history}>
          Última {headerTitle}: {history}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.btnTitle}>{btnTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskModalContent;
