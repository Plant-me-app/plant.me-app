import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Backdrop } from "react-native-backdrop";

const Modal = ({
  visible,
  handleOpen,
  handleClose,
  children,
}): React.ReactElement => {
  return (
    <>
      <Backdrop
        visible={visible}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onClose={() => {}}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        overlayColor="rgba(0,0,0,0.32)"
        backdropStyle={{
          backgroundColor: "#fff",
        }}
        containerStyle={styles.container}
      >
        <View style={{ marginBottom: 10 }}>
          <View style={styles.header} />
          {children}
        </View>
      </Backdrop>
    </>
  );
};

export default Modal;
