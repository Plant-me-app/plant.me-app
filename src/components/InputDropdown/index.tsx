import React from "react";
import { View, Text } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import { styles } from "./styles";

interface IDropdown {
  items: [];
  placeholder: string;
  onSelect?: (item) => void;
  itemSelected?: {};
}

const InputDropdown = ({
  items,
  placeholder,
  onSelect,
  itemSelected,
}: IDropdown): React.ReactElement => {
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
          items={items}
          defaultIndex={0}
          resetValue={false}
          textInputProps={{
            placeholder: placeholder,
            underlineColorAndroid: "transparent",
            style: styles.dropDownSearch,
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
