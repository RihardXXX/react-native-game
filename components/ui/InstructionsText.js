import { Text, StyleSheet } from "react-native";
import { whiteDark } from "../../styles/color";

const InstructionsText = ({children, style}) => {
    return (
        <Text style={[styles.textRoot, style]}>
            {children}
        </Text>
    )
}

export default InstructionsText;


const styles = StyleSheet.create({
    textRoot: {
        fontFamily: 'open-sans-reqular',
        color: whiteDark,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    }
})
