import React, { useState } from "react";
import { styles } from "./styles";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import { buttonTypes } from "../../constants/buttonsTypes.enum";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";
import InputText from "../../components/InputText";
import PlantImage from "../../components/PlantImage";

const plants = require("../../../assets/plants.json");
const plantSize = require("../../../assets/plantSize.json");

const NewPlantView = (): React.ReactElement => {
  const [selectedSpecies, setSeletedSpecies] = useState({});
  const [nickname, setNickname] = useState("");
  const [selectedSize, setSize] = useState({});
  const window = useWindowDimensions();

  const onSelect = (item) => {
    setSeletedSpecies(item);
  };

  const onChangeText = (text) => {
    setNickname(text);
  };

  const onSelectSize = (item) => {
    setSize(item);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nova Planta</Text>
        </View>
        <View style={styles.body}>
          <PlantImage />
          <InputText
            placeholder="Nome da Planta"
            title="Nome"
            onChangeText={onChangeText}
            text={nickname}
          />
          <InputDropdown
            items={plants}
            placeholder="Espécie"
            onSelect={onSelect}
            itemSelected={selectedSpecies}
          />
          <InputDropdown
            items={plantSize}
            placeholder="Porte"
            onSelect={onSelectSize}
            itemSelected={selectedSize}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                console.log("clicked");
              }}
              title="Salvar"
              type={buttonTypes.SmallPrimary}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewPlantView;
