import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button";
import { Colors } from "../../../configs/colors";
import { buttonTypes } from "../../../constants/buttonsTypes.enum";
import { Labels } from "../../../constants/label.constants";
import { Messages } from "../../../constants/messages.constants";
import { TaskTypes } from "../../../constants/taskTypes.enum";
import { styles } from "./styles";
import { customStyles } from "./styles";

interface ITaskContent {
  plant?: {};
  plantName?: string;
  onPressDelete?: () => void;
  onPressCancel?: () => void;
  onPress?: () => void;
  history?: string;
  taskType?: TaskTypes;
  isSuccess?: boolean;
  isButtonEnabled?: boolean;
  isOpen: boolean;
}

const waterIcon = require("../../../assets/images/Details/TasksModal/Water.png");
const soilIcon = require("../../../assets/images/Details/TasksModal/Soil.png");
const sunIcon = require("../../../assets/images/Details/TasksModal/Sun.png");
const fertilizerIcon = require("../../../assets/images/Details/TasksModal/Fertilizer.png");

const TaskModalContent = ({
  plant,
  plantName,
  onPress,
  onPressDelete,
  onPressCancel,
  history,
  taskType,
  isSuccess = false,
  isButtonEnabled,
  isOpen = false,
}: ITaskContent): React.ReactElement => {
  const content = {
    [TaskTypes.Water]: {
      headerTitle: "Rega",
      btnTitle: "Regar",
      color: Colors.water,
      icon: waterIcon,
      subtitle: "Última Rega",
      deleteSubtitle: "rega",
    },
    [TaskTypes.Soil]: {
      headerTitle: "Troca de Terra",
      btnTitle: "Trocar Terra",
      color: Colors.soil,
      icon: soilIcon,
      subtitle: "Última Troca de Terra",
      deleteSubtitle: "troca de terra",
    },
    [TaskTypes.Light]: {
      headerTitle: "Luz Solar",
      btnTitle: "Iluminar",
      color: Colors.sun,
      icon: sunIcon,
      subtitle: "Última Exposição à Luz",
      deleteSubtitle: "exposição a luz",
    },
    [TaskTypes.Fertilizer]: {
      headerTitle: "Adubo",
      btnTitle: "Adubar",
      color: Colors.fertilizer,
      icon: fertilizerIcon,
      subtitle: "Última Adubagem",
      deleteSubtitle: "adubagem",
    },
  };

  const [currentTask, setCurrentTask] = useState(content[taskType]);
  const [showContent, setShowContent] = useState(true);
  const [showDeleteContent, setShowDeleteContent] = useState(false);

  const loadContent = () => {
    const selectedTask = content[taskType];
    setCurrentTask(selectedTask);
  };

  useEffect(() => {
    loadContent();
    setShowContent(isButtonEnabled || isSuccess);
    setShowDeleteContent(!isButtonEnabled && !isSuccess);
  }, [isOpen, history]);

  return (
    <View>
      {showContent && (
        <>
          <View style={styles.header}>
            <Image source={currentTask.icon} style={styles.icon} />
            <Text style={styles.headerTitle}>{currentTask.headerTitle}</Text>
          </View>
          <View style={styles.body}>
            {!isSuccess && (
              <>
                <Text style={styles.history}>
                  {currentTask.subtitle}: {history ?? Messages.noRecord}
                </Text>
                <TouchableOpacity
                  onPress={onPress}
                  style={customStyles(currentTask.color).button}
                >
                  <Text style={styles.btnTitle}>{currentTask.btnTitle}</Text>
                </TouchableOpacity>
              </>
            )}

            {isSuccess && (
              <Text style={styles.success}>
                {Messages.good} {plantName} {Messages.taskSuccess}
              </Text>
            )}
          </View>
        </>
      )}
      {showDeleteContent && (
        <View style={styles.body}>
          <Text style={styles.deleteText}>
            {Messages.deleteMessage} {currentTask.deleteSubtitle} ({history})
            {Messages.questionMark}
          </Text>
          <View style={styles.deleteButtons}>
            <Button
              title={Labels.cancel}
              type={buttonTypes.SmallSecondary}
              onPress={onPressCancel}
            />
            <Button
              title={Labels.confirm}
              type={buttonTypes.SmallDanger}
              onPress={onPressDelete}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default TaskModalContent;
