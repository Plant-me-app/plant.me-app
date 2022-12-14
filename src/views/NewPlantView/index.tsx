import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { buttonTypes } from "../../constants/buttonsTypes.enum";
import { createPlant } from "../../services/plant.service";
import { IPlantImage, ISize, ISpecies } from "../../constants/plant.interface";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";
import InputText from "../../components/InputText";
import AvatarModal from "../../components/AvatarModal/AvatarModal";
import { Labels } from "../../constants/label.constants";

const plants = require("../../assets/mocks/plants.json");
const plantSize = require("../../assets/mocks/plantSize.json");

const NewPlantView = ({ navigation }): React.ReactElement => {
  const [species, setSeletedSpecies] = useState<ISpecies>({});
  const [name, setName] = useState<string>("");
  const [size, setSize] = useState<ISize>({});
  const [img, setImg] = useState<IPlantImage>();
  const [loading, setLoading] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const onSelectSpecies = (item: ISpecies) => {
    setSeletedSpecies(item);
  };

  const onChangeText = (text) => {
    setName(text);
  };

  const onSelectSize = (item: ISize) => {
    setSize(item);
  };

  const onSelectImage = (item: IPlantImage) => {
    setImg(item);
  };

  const isFilled = () => {
    setEnabled(
      name?.length > 0 &&
        species?.name?.length > 0 &&
        size?.name?.length > 0 &&
        img?.path?.length > 0
    );
  };

  const onSave = async () => {
    setLoading(true);
    await createPlant({
      name: name,
      species: species,
      size: size.name,
      image: img?.img,
    });
    navigation.navigate("Home");
    setLoading(false);
  };

  useEffect(() => {
    isFilled();
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{Labels.newPlantHeader}</Text>
        </View>
        <View style={styles.body}>
          <AvatarModal onChangeImage={onSelectImage} />
          <InputText
            placeholder="Nome da Planta"
            title="Nome"
            onChangeText={onChangeText}
            text={name}
          />
          <InputDropdown
            items={plants}
            placeholder="Esp??cie"
            onSelect={onSelectSpecies}
            itemSelected={species}
          />
          <InputDropdown
            items={plantSize}
            placeholder="Porte"
            onSelect={onSelectSize}
            itemSelected={size}
          />
          <View style={styles.buttonContainer}>
            <Button
              disabled={!isEnabled}
              onPress={() => onSave()}
              title="Salvar"
              type={
                isEnabled
                  ? buttonTypes.SmallPrimary
                  : buttonTypes.DisabledSmallPrimary
              }
            />
          </View>
        </View>
        {loading && (
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
            {<ActivityIndicator size="large" />}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewPlantView;
