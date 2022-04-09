import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { pink } from '../../styles/color';

const Card = ({children}) => {

    const { height, width } = useWindowDimensions();

    const styleAlbum = {
        marginTop: height > 430 ? 80 : 40,
        maxWidth: height > 430 ? '80%' : '50%'
    }

    return (
        <View style={[styles.inputContainer, styleAlbum]}>
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
        marginTop: 40,
        padding: 10,
        backgroundColor: pink,
        borderRadius: 8,
        maxWidth: '80%'
    }
})