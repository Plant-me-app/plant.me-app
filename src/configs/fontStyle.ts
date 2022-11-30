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
        letterSpacing: 3,
    },
    
    modal: {
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 3,
        paragraphSpacing: 5,
    },
    
    link: {
        fontSize: FontSize.xSmall,
        fontWeight: "600",
        letterSpacing: 3,
    },
    
    header: {
        fontSize: FontSize.xxxLarge,
        fontWeight: "700",
        letterSpacing: 3,
    },
    
    header2: {
        fontSize: FontSize.large,
        fontWeight: "600",
        letterSpacing: 3,
    },
    
    button: {
        fontSize: FontSize.xLarge,
        fontWeight: "400",
        letterSpacing: 3,
    },

    smallButton: {
        fontSize: FontSize.xSmall,
        fontWeight: "400",
        letterSpacing: 1,
    },
      
    subtitle: {
        fontSize: FontSize.xxSmall,
        fontWeight: "400",
        letterSpacing: 3,
    },
});