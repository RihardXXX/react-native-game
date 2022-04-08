import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { lightGray, darkGray, whiteDark, red, pink } from './styles/color';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [guesRounds, setGuessRounds] = useState(0);

  const selectedNumberUser = (numberSelected) => {
    setUserNumber(numberSelected);
  }

  const onStartGame = () => {
    setUserNumber('');
    setGameOver(false);
    setGuessRounds(0);
  };

  let [fontsLoaded] = useFonts({
    'open-sans-reqular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const changeGameOver = () => setGameOver(true);

  let screen = <GameStartScreen selectedNumberUser={selectedNumberUser} />;

  if (userNumber) {
    screen = <GameScreen 
              userNumber={userNumber} 
              changeGameOver={changeGameOver} 
              setGuessRounds={setGuessRounds}
            />;
  }

  if (gameOver) {
    screen = <GameOverScreen 
                userNumber={userNumber} 
                guesRounds={guesRounds} 
                onStartGame={onStartGame}
              />
  }

  return (
    <LinearGradient 
      colors={[darkGray, whiteDark]} 
      style={styles.screenMain}
    >
      <ImageBackground
        source={require('./assets/images/background.jpeg')}
        style={styles.screenMain}
        resizeMode='cover'
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.screenMain}>
          {
            screen
          }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
  },
  image: {
    opacity: 0.7,
  }
});


