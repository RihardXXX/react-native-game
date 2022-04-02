import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { pink } from "../styles/color";

const GameStartScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>
                start
            </PrimaryButton>
            <PrimaryButton>
                confirm
            </PrimaryButton>
            <PrimaryButton>
                reset
            </PrimaryButton>
        </View>
    );
}

export default GameStartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 80,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: pink,
        borderRadius: 8,
    }
})

