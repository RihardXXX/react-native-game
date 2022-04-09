import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionsText from "../components/ui/InstructionsText";
import { pink, whiteDark } from '../styles/color';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogger from "../components/ui/GuessLogger";

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

const GameScreen = ({userNumber, changeGameOver, setGuessRounds}) => {
    const initialNumer = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumer);
    const [guessList, setGuessList] = useState([initialNumer]);

    const nextGuessHandler = (direction) => { // higher or lower
        setGuessRounds(num => num + 1);
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
        setGuessList(guessList => [newRndGuess, ...guessList]);
    }

    useEffect(() => {
        if (userNumber === currentGuess) {
            changeGameOver(true);
        }
    }, [userNumber, currentGuess, changeGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const { height } = useWindowDimensions();

    

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>
                { currentGuess }
            </NumberContainer>
            <View>
                <InstructionsText style={{color: pink}}>Please click High or Lower</InstructionsText>
                <View style={styles.buttonsBlock}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons 
                                name="remove-circle-outline" 
                                size={32} color={whiteDark} 
                            />
                        </PrimaryButton>   
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                            <Ionicons 
                                name="add-circle-outline" 
                                size={32} color={whiteDark} 
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessList}
                    renderItem={({item, index}) => <GuessLogger index={index + 1} guessNum={item} />}
                    keyExtractor={item => `${item} h ${Math.random()}`}
                />
            </View>
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        marginTop: 20
    },
    buttonsBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        marginTop: 30
    }
})