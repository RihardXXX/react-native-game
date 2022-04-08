import { View, Text, StyleSheet } from "react-native";
import { darkGray, whiteDark } from "../../styles/color";

const GuessLogger = ({index, guessNum}) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.textIndex}>
                {index}.
            </Text>
            <Text style={styles.textGuess}>
                #{guessNum}
            </Text>
        </View>
    )
};

export default GuessLogger;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: darkGray,
        backgroundColor: whiteDark,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    textIndex: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    textGuess: {
        fontSize: 22,
        fontFamily: 'open-sans-reqular',
        marginLeft: 20
    }
})