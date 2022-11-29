import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { fontStyles } from "../../configs/fontStyle";
import { styles } from "./styles";


const Button = ({onPress, title, type = 'primary'}): React.ReactElement => {
    const isPrimary = type === 'primary';
    return (
        <TouchableOpacity onPress={onPress} style={isPrimary ? styles.primaryButton : styles.secondaryButton}>
            <Text style={[fontStyles.button, isPrimary ? styles.primaryText : styles.secondaryText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;