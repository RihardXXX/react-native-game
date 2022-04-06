import { Text, StyleSheet } from "react-native";
import { red, pink } from '../../styles/color';

const Title = ({children}) => {
    return (
        <Text style={styles.title}>
            { 
                children
            }
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        textAlign: 'center',
        color: red,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: pink,
        borderRadius: 3
    }
})