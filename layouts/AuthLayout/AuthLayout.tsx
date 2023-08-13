import React from 'react';
import { View, Image } from "react-native";
import { styles } from "./styles";

export default function AuthLayout({children}:{children: React.ReactNode}) {
    return (
        <View style={styles.auth}>
            <Image style={styles.authImage}
                source={require('../../assets/icons/icon.png')} />
            <View style={styles.authContainer}>
                {children}
            </View>
        </View>
    )
}