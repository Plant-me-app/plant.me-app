import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { styles } from "./styles";

interface IDropdown {
  items;
  placeholder: string;
  onSelect?: (item) => void;
  itemSelected?: {};
  isSpecies?: boolean;
}

const InputDropdown = ({
  items,
  placeholder,
  onSelect,
  itemSelected,
  isSpecies = false,
}: IDropdown): React.ReactElement => {
  const sortSpeciesByName = () => {
    if (isSpecies) {
      items.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
    return items;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{placeholder}</Text>
        <SearchableDropdown
          containerStyle={styles.dropDownContainer}
          onItemSelect={onSelect}
          selectedItems={itemSelected}
          itemStyle={styles.item}
          itemTextStyle={styles.itemText}
          itemsContainerStyle={styles.itemsContainer}
          items={sortSpeciesByName()}
          defaultIndex={0}
          resetValue={false}
          textInputProps={{
            placeholder: placeholder,
            underlineColorAndroid: "transparent",
            style: styles.dropDownSearch,
            showSoftInputOnFocus: false,
            defaultValue: itemSelected["name"],
          }}
          listProps={{
            nestedScrollEnabled: true,
          }}
        />
      </View>
    </View>
  );
};

export default InputDropdown;
