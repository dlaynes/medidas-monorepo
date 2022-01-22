import { Platform } from "react-native";
import type { ViewStyle } from "react-native";
import { colors } from 'react-native-elements'
import { Styles } from "./lib/constants";

export const theme = {
    colors: {
        ...Platform.select({
            default: colors.platform.android,
            ios: colors.platform.ios,
        }),
    },
}

export const styles = {
    container: {
      marginTop: 40,
      padding: Styles.spacing,
    } as ViewStyle,
    verticallySpaced: {
      paddingTop: 4,
      paddingBottom: 4,
      alignSelf: 'stretch',
    } as ViewStyle,
}
