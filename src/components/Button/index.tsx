import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { buttonTypes } from "../../constants/buttonsTypes.enum";

interface IButton {
  title: string;
  type?: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({
  title,
  type = buttonTypes.Primary,
  disabled = false,
  onPress,
}: IButton): React.ReactElement => {
  const buttonType = {
    [buttonTypes.Primary]: styles.primaryButton,
    [buttonTypes.Secondary]: styles.secondaryButton,
    [buttonTypes.SmallPrimary]: styles.primarySmallButton,
    [buttonTypes.SmallSecondary]: styles.secondarySmallButton,
    [buttonTypes.SmallDanger]: styles.dangerSmallButton,
    [buttonTypes.DisabledSmallPrimary]: styles.disabledPrimarySmallButton,
  };
  const textType = {
    [buttonTypes.Primary]: styles.primaryText,
    [buttonTypes.Secondary]: styles.secondaryText,
    [buttonTypes.SmallPrimary]: styles.primarySmallText,
    [buttonTypes.SmallSecondary]: styles.secondarySmallText,
    [buttonTypes.SmallDanger]: styles.dangerSmallText,
    [buttonTypes.DisabledSmallPrimary]: styles.primarySmallText,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonType[type]}
      disabled={disabled}
    >
      <Text style={textType[type]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
