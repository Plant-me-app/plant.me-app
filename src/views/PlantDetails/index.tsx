import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Labels } from "../../constants/label.constants";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../configs/colors";
import { TaskTypes } from "../../constants/taskTypes.enum";
import {
  deleteTaskHistory,
  getTaskButtonEnabled,
  saveTaskHistory,
  updatePlantScore,
} from "../../services/plant.service";

import Modal from "../../components/Modal";
import InfoContent from "./InfoContent";
import TaskIcon from "./TaskIcon";
import TaskModalContent from "./TaskModalContent";
import { taskIcons } from "../../constants/taskIcons";
import { getPlantById } from "../../services/plant.service";
import LevelContent from "./LevelContent";

const editIcon = require("../../assets/images/Details/Edit.png");
const infoIcon = require("../../assets/images/Details/Info.png");

const PlantDetails = ({ navigation, route }): React.ReactElement => {
  const { plant } = route?.params;
  const [modalInfo, setModalInfo] = useState(false);
  const [modalLevel, setModalLevel] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [taskModelContent, setTaskModelContent] = useState(null);
  const [taskOpen, setTaskOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [waterButton, setWaterButton] = useState(false);
  const [soilButton, setSoilButton] = useState(false);
  const [lightButton, setLightButton] = useState(false);
  const [fertilizerButton, setFertilizerButton] = useState(false);
  const [plantData, setPlantData] = useState({});

  const taskElementMap = {
    [TaskTypes.Water]: (
      <TaskModalContent
        history={plantData["details"]?.water.lastDate[0]}
        taskType={TaskTypes.Water}
        isButtonEnabled={waterButton}
        onPress={() => onTaskComplete(TaskTypes.Water)}
        onPressDelete={() => deleteTask(plant._id, TaskTypes.Water)}
        onPressCancel={() => setOpenModal(false)}
        isOpen={openModal}
      />
    ),
    [TaskTypes.Soil]: (
      <TaskModalContent
        history={plantData["details"]?.soil.lastDate[0]}
        taskType={TaskTypes.Soil}
        isButtonEnabled={soilButton}
        onPress={() => onTaskComplete(TaskTypes.Soil)}
        onPressDelete={() => deleteTask(plant._id, TaskTypes.Soil)}
        onPressCancel={() => setOpenModal(false)}
        isOpen={openModal}
      />
    ),
    [TaskTypes.Light]: (
      <TaskModalContent
        history={plantData["details"]?.light.lastDate[0]}
        taskType={TaskTypes.Light}
        isButtonEnabled={lightButton}
        onPress={() => onTaskComplete(TaskTypes.Light)}
        onPressDelete={() => deleteTask(plant._id, TaskTypes.Light)}
        onPressCancel={() => setOpenModal(false)}
        isOpen={openModal}
      />
    ),
    [TaskTypes.Fertilizer]: (
      <TaskModalContent
        history={plantData["details"]?.fertilizer.lastDate[0]}
        taskType={TaskTypes.Fertilizer}
        isButtonEnabled={fertilizerButton}
        onPress={() => onTaskComplete(TaskTypes.Fertilizer)}
        onPressDelete={() => deleteTask(plant._id, TaskTypes.Fertilizer)}
        onPressCancel={() => setOpenModal(false)}
        isOpen={openModal}
      />
    ),
  };

  const deleteTask = async (id, type) => {
    setLoading(true);
    await deleteTaskHistory(id, type).then(() => {
      updatePlantScore(plant._id, true);
    });
    setOpenModal(false);
    setLoading(false);
  };
  const onBack = () => {
    navigation.goBack();
  };

  const onEditPlant = () => {
    navigation.navigate("EditPlant", { edition: true, plantSelected: plant });
  };

  const TaskIcons = () => (
    <>
      {taskIcons.map(({ icon, label, task }) => (
        <TaskIcon
          key={label}
          icon={icon}
          label={label}
          onPress={() => onTaskModalPress(task)}
        />
      ))}
    </>
  );

  const taskCompleteContent = (taskType) => (
    <>
      <TaskModalContent
        plantName={plant.name}
        taskType={taskType}
        isButtonEnabled={false}
        isSuccess={true}
        isOpen={openModal}
      />
    </>
  );

  const onTaskComplete = async (taskType: TaskTypes) => {
    setLoading(true);
    await saveTaskHistory(plant._id, taskType).then(() => {
      updatePlantScore(plant._id, false);
    });
    setTaskModelContent(taskCompleteContent(taskType));
    setLoading(false);
  };

  const onTaskModalPress = (taskTypes: TaskTypes) => {
    const modelContent = taskElementMap[taskTypes];
    loadPlant();
    setTaskOpen(taskTypes);
    setTaskModelContent(modelContent);
    setOpenModal(true);
  };

  const loadTaskButtonState = async () => {
    const response = await getTaskButtonEnabled(plant._id);
    setWaterButton(response.data.isWaterButtonEnabled);
    setSoilButton(response.data.isSoilButtonEnabled);
    setLightButton(response.data.isLightButtonEnabled);
    setFertilizerButton(response.data.isFertilizerButtonEnabled);
  };

  const loadPlant = async () => {
    const response = await getPlantById(plant._id);
    setPlantData(response.data.data);
  };

  const onModalLevelPress = async () => {
    await loadPlant();
    setModalLevel(true);
  };

  useEffect(() => {
    loadPlant();
    loadTaskButtonState();
  }, [openModal]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.backBtnContainer}>
          <TouchableOpacity style={styles.backLabel} onPress={() => onBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color={Colors.dark}
            />
            <Text style={styles.link}>{Labels.goBack}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setModalInfo(true)}
            >
              <Image source={infoIcon} style={styles.detailsIcons} />
              <Text style={styles.iconSubtitle}>{Labels.infos}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => onModalLevelPress()}
            >
              <View style={styles.levelIcon}>
                <Text style={styles.levelText}>
                  {plantData["score"]
                    ? plantData["score"].level
                    : plant["score"].level}
                </Text>
              </View>
              <Text style={styles.iconSubtitle}>{Labels.level}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => onEditPlant()}
            >
              <Image source={editIcon} style={styles.detailsIcons} />
              <Text style={styles.iconSubtitle}>{Labels.edit}</Text>
            </TouchableOpacity>
          </View>
          <Image source={plant.image} style={styles.plantImg} />
          <Text style={styles.title}>{plant.name}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContainer}>
            <TaskIcons />
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.link}>{Labels.seeHistory}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        visible={modalInfo}
        handleOpen={() => setModalInfo(true)}
        handleClose={() => setModalInfo(false)}
      >
        <InfoContent plant={plant} />
      </Modal>
      <Modal
        visible={modalLevel}
        handleOpen={() => setModalLevel(true)}
        handleClose={() => setModalLevel(false)}
      >
        <LevelContent plant={plantData} open={modalLevel} />
      </Modal>
      <Modal
        visible={openModal}
        handleOpen={() => {
          setOpenModal(true);
        }}
        handleClose={() => {
          const modelContent = taskElementMap[taskOpen];
          setOpenModal(false);
          setTaskModelContent(modelContent);
        }}
      >
        {taskModelContent}
      </Modal>
      {loading && (
        <View
          style={{
            zIndex: 100,
            position: "absolute",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.01)",
          }}
        >
          {<ActivityIndicator size="large" />}
        </View>
      )}
    </>
  );
};

export default PlantDetails;
