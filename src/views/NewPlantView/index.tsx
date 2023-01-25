import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { buttonTypes } from "../../constants/buttonsTypes.enum";
import {
  createPlant,
  deletePlant,
  updatePlant,
} from "../../services/plant.service";
import { IPlantImage, ISize, ISpecies } from "../../constants/plant.interface";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";
import InputText from "../../components/InputText";
import AvatarModal from "../../components/AvatarModal";
import { Labels } from "../../constants/label.constants";
import Modal from "../../components/Modal";

const plants = require("../../assets/mocks/plants.json");
const plantSize = require("../../assets/mocks/plantSize.json");

const NewPlantView = ({ route, navigation }): React.ReactElement => {
  const { edition } = route?.params;
  const { plantSelected } = route?.params;
  const [species, setSeletedSpecies] = useState<ISpecies>(
    edition && plantSelected.species
  );
  const [name, setName] = useState<string>(edition && plantSelected.name);
  const [size, setSize] = useState<ISize>(
    edition && { name: plantSelected.size }
  );
  const [img, setImg] = useState<IPlantImage>(edition && plantSelected.image);
  const [loading, setLoading] = useState(false);
  const [isEnabled, setEnabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isEdited, setEditied] = useState(false);

  const onSelectSpecies = (item: ISpecies) => {
    setSeletedSpecies(item);
    setEditied(true);
  };

  const onChangeText = (text) => {
    setName(text);
    setEditied(true);
  };

  const onSelectSize = (item: ISize) => {
    setSize(item);
    setEditied(true);
  };

  const onSelectImage = (item: IPlantImage) => {
    setImg(item);
    setEditied(true);
  };

  const isFilled = () => {
    if (edition) {
      if (isEdited) {
        setEnabled(!!name && !!img && !!species && !!size);
      } else {
        setEnabled(false);
      }
    } else {
      setEnabled(!!name && !!img && !!species && !!size);
    }
  };

  const onSave = async () => {
    setLoading(true);
    if (edition) {
      await updatePlant(
        {
          name: name,
          species: species,
          size: size.name,
          image: img?.img,
        },
        plantSelected._id
      );
    } else {
      await createPlant({
        name: name,
        species: species,
        size: size.name,
        image: img?.img,
      });
    }
    navigation.navigate("HomeView");
    setLoading(false);
  };

  const onCancel = () => {
    navigation.goBack();
  };

  const confirmationContent = (plantSelected) => (
    <View>
      <Text style={styles.confirmationModalText}>
        {"Tem certeza que deseja deletar " + plantSelected.name + "?"}
      </Text>
      <View style={styles.confirmationModalButtons}>
        <Button
          onPress={() => setOpenModal(false)}
          title="Cancelar"
          type={buttonTypes.SmallSecondary}
        />
        <Button
          onPress={() => removePlant(plantSelected)}
          title="Confirmar"
          type={buttonTypes.SmallDanger}
        />
      </View>
    </View>
  );

  const removePlant = async (plantSelected) => {
    setLoading(true);
    await deletePlant(plantSelected._id);
    setOpenModal(false);
    setLoading(false);
    navigation.navigate("HomeView");
  };

  const onDelete = () => {
    setOpenModal(true);
    setModalContent(confirmationContent(plantSelected));
  };

  useEffect(() => {
    isFilled();
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          {edition && (
            <View style={styles.cancelBtnContainer}>
              <TouchableOpacity onPress={() => onCancel()}>
                <Text style={styles.cancelLink}>{Labels.cancel}</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.headerTitle}>
            {edition ? "Editar Planta" : Labels.newPlantHeader}
          </Text>
        </View>
        <View style={styles.body}>
          <AvatarModal
            onChangeImage={onSelectImage}
            selectedImage={plantSelected?.image}
          />
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
            {edition && (
              <View>
                <TouchableOpacity onPress={() => onDelete()}>
                  <Text style={styles.deleteLink}>{Labels.delete}</Text>
                </TouchableOpacity>
              </View>
            )}
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
        <Modal
          visible={openModal}
          handleOpen={() => setOpenModal(true)}
          handleClose={() => setOpenModal(false)}
        >
          {modalContent}
        </Modal>
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
