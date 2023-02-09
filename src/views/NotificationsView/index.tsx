import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Labels } from "../../constants/label.constants";
import { getNotifications } from "../../services/notification";
import { styles } from "./styles";

const PlagueIcon = require("../../assets/images/Plague.png");

const NotificationView = ({ navigation }): React.ReactElement => {
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    const response = await getNotifications();
    setNotifications(response.data.data);
  };

  useEffect(() => {
    const loadWhenNavigate = navigation.addListener("focus", () => {
      loadNotifications();
    });
    loadNotifications();

    return loadWhenNavigate;
  }, []);

  const Notification = ({ notification }) => (
    <View style={styles.card}>
      <Image source={PlagueIcon} style={styles.icon} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{notification.title}</Text>
        <Text style={styles.cardText}>{notification.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{Labels.notifications}</Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={{ flex: 1 }}>
          {notifications.map((notification) => (
            <Notification notification={notification} key={notification.text} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationView;
