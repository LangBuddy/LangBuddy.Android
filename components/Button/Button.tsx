import { Text, TouchableOpacity } from 'react-native';
import { IButton } from './types';
import { styles } from './style';
import { getColorButton, getColorText } from '../../utils/commons/Button';

export default function Button({ title, color, onPress }: IButton) {
    return (
        <TouchableOpacity style={{ ...styles.componentButton, ...getColorButton(color) }}
            onPress={onPress}>
            <Text style={{ ...styles.componentButtonText, ...getColorText(color) }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}