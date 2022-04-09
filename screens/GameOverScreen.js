import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { pink, whiteDark } from '../styles/color';

const GameOverScreen = ({userNumber, guesRounds, onStartGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>
                Game Over
            </Title>
            <View style={styles.image}>
                <Image 
                    style={styles.img}
                    source={require('../assets/images/winner.jpeg')}
                />
            </View>
            <Text style={styles.summaryText}>
                You need phone <Text style={styles.boldText}>{userNumber}</Text> guess number 
                <Text style={styles.boldText}>{guesRounds}</Text>
            </Text>
            <PrimaryButton onPress={onStartGame}>
                start new game
            </PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const devicesWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 50
    },
    image: {
        marginTop: 20,
        height: devicesWidth > 380 ? 300 : 200,
        width: devicesWidth > 380 ? 300 : 200,
        borderRadius: devicesWidth > 380 ? 150 : 100,
        borderWidth: 2,
        borderColor: 'black'
    },
    img: {
        height: '100%',
        width: '100%',
        borderRadius: 150
    },
    summaryText: {
        fontFamily: 'open-sans-reqular',
        color: pink,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 15
    },
    boldText: {
        fontFamily: 'open-sans-bold',
    }
})