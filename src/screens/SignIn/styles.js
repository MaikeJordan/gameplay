import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.background
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
    },
    title: {},
    subtitle: {}
});