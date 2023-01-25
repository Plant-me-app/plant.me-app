import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import PlantImage from "../PlantImage";
import { Backdrop } from "react-native-backdrop";
import { Avatars } from "./Avatars";

interface IAvatarModal {
  onChangeImage?: (item) => void;
  selectedImage?: number;
}

const AvatarModal = ({
  onChangeImage,
  selectedImage,
}: IAvatarModal): React.ReactElement => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState(selectedImage ?? null);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const AvatarsImages = () => (
    <View style={styles.imageContainer}>
      {Avatars.map((avatar) => (
        <TouchableOpacity
          key={avatar.nickname}
          onPress={() => {
            setImg(avatar.img);
            setVisible(false);
            onChangeImage(avatar);
          }}
        >
          <Image source={avatar.img} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <PlantImage onPress={() => setVisible(true)} avatar={img} />
      </View>
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
        <View style={styles.contentContainer}>
          <View style={styles.header} />
          <AvatarsImages />
        </View>
      </Backdrop>
    </>
  );
};

export default AvatarModal;
