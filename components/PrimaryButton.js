import { View, TextInput } from 'react-native';

const PrimaryButton = ({children}) => {
    return(
        <View>
            <TextInput>
                { children }
            </TextInput>
        </View>
    )
}

export default PrimaryButton;