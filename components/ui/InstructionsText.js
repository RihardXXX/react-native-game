import { Text, StyleSheet, Dimensions } from "react-native";
import { whiteDark } from "../../styles/color";

const InstructionsText = ({children, style}) => {
    return (
        <Text style={[styles.textRoot, style]}>
            {children}
        </Text>
    )
}

export default InstructionsText;

const divecesWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    textRoot: {
        fontFamily: 'open-sans-reqular',
        color: whiteDark,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: divecesWidth > 380 ? 20 : 18
    }
})
