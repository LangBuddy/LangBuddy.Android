import { Text, View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { styles } from "./styles";
import Input from "../../components/Input";
import { Icon } from "../../components/Icon";
import Button from "../../components/Button/Button";
import { ButtonColorEnum } from "../../components/Button/type";
import React from "react";

export default function AuthRestorePassword() {
    const [email, setEmail] = React.useState<string>("");

    return (
        <AuthLayout>
            <View style={styles.authRestorePassword}>
                <Text style={styles.authRestorePasswordText}>
                    Restore Password
                </Text>
                <View style={styles.authRestorePasswordForm}>
                    <Input placeholder="email"
                        icon={<Icon.Email />} 
                        value={email}
                        onChangeText={setEmail}
                        autoComplete="email"
                        keyboardType='email-address'
                        textContentType="emailAddress"/>
                    <Button title="Restore" color={ButtonColorEnum.solid} />
                </View>
            </View>
        </AuthLayout>
    )
}