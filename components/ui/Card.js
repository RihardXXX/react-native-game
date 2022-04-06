import { View, StyleSheet } from 'react-native';
import { pink } from '../../styles/color';

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>
            {
                children
            }
         </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        padding: 10,
        backgroundColor: pink,
        borderRadius: 8,
    }
})