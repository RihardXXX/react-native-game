import { Text, StyleSheet, Dimensions } from "react-native";
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

const devicesWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    title: {
        fontSize: devicesWidth > 380 ? 24 : 18,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        textAlign: 'center',
        color: red,
        paddingVertical: devicesWidth > 380 ? 10 : 8,
        paddingHorizontal: devicesWidth > 380 ? 15 : 10,
        borderWidth: 1,
        borderColor: pink,
        borderRadius: 3,
        // minWidth: '70%'
    }
})