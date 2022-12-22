import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

interface IInputText {
  placeholder: string;
  title: string;
  onChangeText?: (item) => void;
  text?: string;
}

const InputText = ({
  placeholder,
  title,
  onChangeText,
  text,
}: IInputText): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

export default InputText;
