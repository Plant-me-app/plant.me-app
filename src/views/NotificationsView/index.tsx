import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const NotificationView = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default NotificationView;
