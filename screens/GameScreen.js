import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, changeGameOver}) => {
    const initialNumer = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumer);

    const nextGuessHandler = (direction) => { // higher or lower
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                'error',
                'oppps sorry',
                [
                    {
                        text: 'sorry', style: 'cancel'
                    }
                ]
            )
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary += 1
        }

        const newRndGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

        setCurrentGuess(newRndGuess);
    }

    useEffect(() => {
        if (userNumber === currentGuess) {
            changeGameOver(true);
        }
    }, [userNumber, currentGuess, changeGameOver]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>
                { currentGuess }
            </NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                        +
                    </PrimaryButton>
                </View>
                {/* +- */}
            </View>
            {/* <View>Log rounds</View> */}
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        marginTop: 20
    }
})