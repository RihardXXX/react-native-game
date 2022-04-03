import { View, Text, Pressable, StyleSheet } from 'react-native';
import { redVery, red, black, whiteDark, green } from '../styles/color';

const PrimaryButton = ({children, onPress}) => {
    return(
        <View 
            style={styles.buttonWraper}
        >
            <Pressable
                style={({pressed}) => pressed ? [
                    styles.buttonInner,
                    styles.pressed
                ] : styles.buttonInner} 
                android_ripple={{color: redVery}}
                onPress={onPress}
            >
                <Text
                    style={styles.buttonText}
                >
                    { children }
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonWraper: {
        backgroundColor: red,
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    buttonInner: {
        padding: 10
    },
    buttonText: {
        color: whiteDark,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    pressed: {
        backgroundColor: redVery,
        borderRadius: 5
    }
})