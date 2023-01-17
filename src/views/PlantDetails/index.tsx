import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Labels } from "../../constants/label.constants";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../configs/colors";
import Modal from "../../components/Modal";
import InfoContent from "./InfoContent";
import TaskIcon from "./TaskIcon";
import TaskModalContent from "./TaskModalContent";
import { TaskTypes } from "../../constants/taskTypes.enum";

const editIcon = require("../../assets/images/Details/Edit.png");
const infoIcon = require("../../assets/images/Details/Info.png");
const level1Icon = require("../../assets/images/Details/Level1.png");

const fertilizerIcon = require("../../assets/images/Details/Tasks/Fertilizer.png");
const soilIcon = require("../../assets/images/Details/Tasks/Soil.png");
const sunIcon = require("../../assets/images/Details/Tasks/Sun.png");
const waterIcon = require("../../assets/images/Details/Tasks/Water.png");

const PlantDetails = ({ navigation, route }): React.ReactElement => {
  const { plant } = route?.params;
  const [modalInfo, setModalInfo] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [taskModelContent, setTaskModelContent] = useState(null);

  const taskIcons = [
    { icon: waterIcon, label: Labels.water, task: TaskTypes.Water },
    { icon: soilIcon, label: Labels.soil, task: TaskTypes.Soil },
    { icon: sunIcon, label: Labels.sun, task: TaskTypes.Light },
    {
      icon: fertilizerIcon,
      label: Labels.fertilizer,
      task: TaskTypes.Fertilizer,
    },
  ];
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

  const onTaskModalPress = (taskTypes: TaskTypes) => {
    const taskElementMap = {
      [TaskTypes.Water]: (
        <TaskModalContent
          headerTitle="Rega"
          history="02/01/2023"
          btnTitle="Regar"
          onPress={() => console.log("clicou")}
        />
      ),
      [TaskTypes.Soil]: (
        <TaskModalContent
          headerTitle="Troca de Terra"
          history="02/01/2023"
          btnTitle="Trocar Terra"
          onPress={() => console.log("clicou2")}
        />
      ),
      [TaskTypes.Light]: (
        <TaskModalContent
          headerTitle="Luz Solar"
          history="02/01/2023"
          btnTitle="Iluminar"
          onPress={() => console.log("clicou3")}
        />
      ),
      [TaskTypes.Fertilizer]: (
        <TaskModalContent
          headerTitle="Adubo"
          history="02/01/2023"
          btnTitle="Adubar"
          onPress={() => console.log("clicou4")}
        />
      ),
    };

    const modelContent = taskElementMap[taskTypes];
    setTaskModelContent(modelContent);

    setOpenModal(true);
  };

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
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={level1Icon} style={styles.detailsIcons} />
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
        visible={openModal}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => setOpenModal(false)}
      >
        {taskModelContent}
      </Modal>
    </>
  );
};

export default PlantDetails;
