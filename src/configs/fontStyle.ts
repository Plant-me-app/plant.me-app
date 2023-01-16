import { StyleSheet } from 'react-native';
import { FontSize } from './fonts';

export const fontStyles = StyleSheet.create({
    default: {
        fontSize: FontSize.small,
        fontWeight: "400",
        letterSpacing: 3,
    },
    
    defaultSemibold: {
        fontSize: FontSize.small,
        fontWeight: "600",
        letterSpacing: 3
    },

    textInput: {
        fontSize: FontSize.small,
        fontWeight: "700",
        letterSpacing: 1
    },
    
    modal: {
        fontSize: FontSize.small,
        fontWeight: "800",
        letterSpacing: 2
    },

    modalInfo: {
        fontSize: FontSize.xSmall,
        fontWeight: "400",
        letterSpacing: 1
    },
    
    link: {
        fontSize: FontSize.xSmall,
        fontWeight: "600",
        letterSpacing: 2
    },
    
    header: {
        fontSize: FontSize.xxxLarge,
        fontWeight: "700",
        letterSpacing: 3
    },
    
    header2: {
        fontSize: FontSize.large,
        fontWeight: "600",
        letterSpacing: 3
    },
    
    button: {
        fontSize: FontSize.xLarge,
        fontWeight: "400",
        letterSpacing: 3
    },

    smallButton: {
        fontSize: FontSize.xSmall,
        fontWeight: "400",
        letterSpacing: 1
    },
      
    subtitle: {
        fontSize: FontSize.xxSmall,
        fontWeight: "400",
        letterSpacing: 2
    },
});