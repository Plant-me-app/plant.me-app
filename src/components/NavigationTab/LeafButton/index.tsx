import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const LeafButton = (): React.ReactElement => {
    const leaf = require('../../../images/Leaf.png');

    return (
        <TouchableOpacity style={styles.leafButton}>
          <Image source={require('../../../images/Leaf.png')} style={styles.leafIcon} />
        </TouchableOpacity>
    );
};

export default LeafButton;