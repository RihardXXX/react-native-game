import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { pink, black } from "../styles/color";


const GameStartScreen = ({selectedNumberUser}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const resetNumber = () => {
        setEnteredNumber('');
    };

    const confirmNumber = () => {
        const num = Number(enteredNumber);

        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Invalid number',
                'please enter number from 1 before 99',
                [
                    {
                        text: 'ok',
                        style: 'destructive',
                        onPress: () => resetNumber(),
                    }
                ]
            );

            return;
        }

        selectedNumberUser(num);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={e => setEnteredNumber(e)}
                value={enteredNumber}
            />
            <View style={styles.buttonsBlock}>
                <View style={styles.button}>
                    <PrimaryButton 
                        onPress={resetNumber}
                    >
                        reset
                    </PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton
                        onPress={confirmNumber}
                    >
                        confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameStartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: pink,
        borderRadius: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        padding: 3,
        marginVertical: 10,
        borderBottomColor: black,
        borderBottomWidth: 2,
        fontSize: 32,
        color: black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        // width: '100%'
    },
    button: {
        flex: 1,
        // width: 100
    }
})

