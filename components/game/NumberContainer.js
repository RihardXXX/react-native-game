import { View, Text, StyleSheet } from 'react-native';
import { red, pink } from '../../styles/color';

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {
                    children
                }
            </Text>
        </View>
    )
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: red,
        marginVertical: 20,
        marginHorizontal: 50,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: red,
        fontSize: 28,
        fontWeight: 'bold',
    }
})