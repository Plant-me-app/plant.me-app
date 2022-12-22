import React, { useState } from "react";
import { View } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { Strings } from "../../configs/strings";
import { styles } from "./styles";

const InputDropdown = (): React.ReactElement => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      index: 1,
      name: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      index: 2,
      name: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      index: 3,
      name: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      index: 4,
      name: "4 Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
      index: 5,
      name: "5 Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      index: 6,
      name: "6 Item",
    },
  ];

  const [selectedItem, setSeletectItem] = useState({});

  return (
    <View style={styles.container}>
      <SearchableDropdown
        containerStyle={styles.dropDownContainer}
        onItemSelect={(item) => setSeletectItem(item)}
        selectedItems={selectedItem}
        itemStyle={styles.item}
        itemTextStyle={styles.itemText}
        itemsContainerStyle={styles.itemsContainer}
        items={DATA}
        defaultIndex={0}
        resetValue={false}
        textInputProps={{
          placeholder: Strings.species,
          underlineColorAndroid: "transparent",
          style: styles.dropDownSearch,
        }}
        listProps={{
          nestedScrollEnabled: true,
        }}
      />
    </View>
  );
};

export default InputDropdown;
