import React from "react";
import { View, TextInput, Image } from "react-native";
import { Labels } from "../../constants/label.constants";
import { styles } from "./styles";

const SearchBar = (): React.ReactElement => {
  const search = require("../../assets/images/Search.png");

  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <Image source={search} style={styles.searchIcon} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={Labels.searchBarPlaceholder}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
