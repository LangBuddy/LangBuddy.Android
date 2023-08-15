import React from 'react';
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { IAuthLayout } from './types';

export default function AuthLayout({ children, title, subtitle }: IAuthLayout) {
    return (
        <LinearGradient style={styles.auth}
            colors={['#7309AA', 'rgba(161, 61, 213, 0.70)', 'rgba(175, 102, 213, 0.70)']}  >
            <Image style={styles.authImage}
                source={require('../../assets/icons/icon.png')} />
                {title && <Text style={styles.authTitle}>{title}</Text>}
                {subtitle && <Text style={styles.authSubtitle}>{subtitle}</Text>}
            <View style={styles.authContainer}>
                {children}
            </View>
        </LinearGradient>
    )
}