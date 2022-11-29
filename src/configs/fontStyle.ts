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
        fontSize: FontSize.x_small,
        fontWeight: "600",
        letterSpacing: 3,
    },
    
    header: {
        fontSize: FontSize.xxx_large,
        fontWeight: "700",
        letterSpacing: 3,
    },
    
    header2: {
        fontSize: FontSize.large,
        fontWeight: "600",
        letterSpacing: 3,
    },
    
    button: {
        fontSize: FontSize.x_large,
        fontWeight: "400",
        letterSpacing: 3,
        // fontFamily: 'Montserrat-Bold'
    },
      
    subtitle: {
        fontSize: FontSize.xx_small,
        fontWeight: "400",
        letterSpacing: 3,
    },
});