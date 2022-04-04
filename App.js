import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import { lightGray, darkGray, whiteDark, red, pink } from './styles/color';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const selectedNumberUser = (numberSelected) => {
    setUserNumber(numberSelected);
  }

  let screen = <GameStartScreen selectedNumberUser={selectedNumberUser} />;

  if (userNumber) {
    screen = <GameScreen />;
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


