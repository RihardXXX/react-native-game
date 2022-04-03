import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreen from './screens/GameStartScreen';
import { lightGray, darkGray, whiteDark, red, pink } from './styles/color';

export default function App() {
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
        <GameStartScreen />
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


