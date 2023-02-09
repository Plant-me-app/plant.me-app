import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "../../components/Modal";
import { Labels } from "../../constants/label.constants";
import { loadUser } from "../../services/user.service";
import { styles } from "./styles";

const profilePicture = require("../../assets/images/Profile/ProfilePic.png");
const achievementsIcon = require("../../assets/images/Profile/AchievementsIcon.png");
const EditIcon = require("../../assets/images/Profile/EditIcon.png");
const ConfigIcon = require("../../assets/images/Profile/ConfigIcon.png");
const ExitIcon = require("../../assets/images/Profile/ExitIcon.png");
const BuildImage = require("../../assets/images/Build.png");

const ProfileView = ({ navigation }): React.ReactElement => {
  const [user, setUser] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadWhenNavigate = navigation.addListener("focus", () => {
      getUser();
    });
    getUser();
    return loadWhenNavigate;
  }, [navigation]);

  const getUser = async () => {
    const response = await loadUser();
    setUser(response.data.data[0]);
  };

  const Menu = (title, icon) => {
    return (
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => setOpenModal(true)}
      >
        <Text style={styles.menuTitle}>{title}</Text>
        <Image style={styles.menuIcon} source={icon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{Labels.profile}</Text>
      </View>
      <View style={styles.body}>
        {user && (
          <>
            <Text style={styles.level}>
              {Labels.level} {user["level"]}
            </Text>
            <View style={styles.profilePicContainer}>
              <Image source={profilePicture} style={styles.profilePicture} />
            </View>
            <Text style={styles.level}>{user["name"]}</Text>
            <Text style={styles.email}>{user["email"]}</Text>
            <View style={styles.menuWrapper}>
              <View>{Menu(Labels.achievements, achievementsIcon)}</View>
              <View style={styles.line} />
              <View>{Menu(Labels.editProfile, EditIcon)}</View>
              <View style={styles.line} />
              <View>{Menu(Labels.configs, ConfigIcon)}</View>
              <View style={styles.line} />
              <View>{Menu(Labels.exit, ExitIcon)}</View>
            </View>
            <Modal
              visible={openModal}
              handleOpen={() => setOpenModal(true)}
              handleClose={() => setOpenModal(false)}
            >
              <View style={styles.buildContainer}>
                <Image source={BuildImage} style={styles.buildImage} />
                <Text style={styles.buildText}>Em construção</Text>
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
};

export default ProfileView;
