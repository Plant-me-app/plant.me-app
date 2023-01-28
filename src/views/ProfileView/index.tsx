import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const profilePicture = require("../../assets/images/Profile/ProfilePic.png");
const achievementsIcon = require("../../assets/images/Profile/AchievementsIcon.png");
const EditIcon = require("../../assets/images/Profile/EditIcon.png");
const ConfigIcon = require("../../assets/images/Profile/ConfigIcon.png");
const ExitIcon = require("../../assets/images/Profile/ExitIcon.png");

const ProfileView = (): React.ReactElement => {
  const Menu = (title, icon) => {
    return (
      <TouchableOpacity style={styles.menuContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Image style={styles.menuIcon} source={icon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.level}>Nível 2</Text>
        <View style={styles.profilePicContainer}>
          <Image source={profilePicture} style={styles.profilePicture} />
        </View>
        <Text style={styles.level}>Luciana Ribeiro</Text>
        <Text style={styles.email}>luciana@email.com</Text>
        <View style={styles.menuWrapper}>
          <View>{Menu("Conquistas", achievementsIcon)}</View>
          <View style={styles.line} />
          <View>{Menu("Editar Perfil", EditIcon)}</View>
          <View style={styles.line} />
          <View>{Menu("Configurações", ConfigIcon)}</View>
          <View style={styles.line} />
          <View>{Menu("Sair da Conta", ExitIcon)}</View>
        </View>
      </View>
    </View>
  );
};

export default ProfileView;
