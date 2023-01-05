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

const plants = require("../../../assets/plants.json");
const plantSize = require("../../../assets/plantSize.json");

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

  const onSave = () => {
    setLoading(true);
    createPlant({
      name: name,
      species: species.name,
      size: size.name,
      image: img.path,
    }).then(() => {
      setLoading(false);
      navigation.navigate("Home");
    });
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
            placeholder="Espécie"
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
        <View style={{ justifyContent: "center" }}>
          {loading ?? <ActivityIndicator size="large" />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewPlantView;
