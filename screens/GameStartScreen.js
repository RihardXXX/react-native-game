import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = () => {
    return (
        <View>
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