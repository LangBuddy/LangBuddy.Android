import React from 'react';
import { View, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <LinearGradient style={styles.auth}
            colors={['#7309AA', 'rgba(161, 61, 213, 0.70)', 'rgba(175, 102, 213, 0.70)']}  >
            <Image style={styles.authImage}
                source={require('../../assets/icons/icon.png')} />
            <View style={styles.authContainer}>
                {children}
            </View>
        </LinearGradient>
    )
}