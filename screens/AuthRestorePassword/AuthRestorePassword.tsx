import React from "react";
import { Text, View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import { Email } from "../../components/Icon";

import { styles } from "./styles";

export default function AuthRestorePassword() {
    const [email, setEmail] = React.useState<string>("");

    return (
        <AuthLayout>
            <View style={styles.authRestorePassword}>
                <Text style={styles.authRestorePasswordText}>
                    Restore Password
                </Text>
                <View style={styles.authRestorePasswordForm}>
                    <Input
                        icon={Email}
                        options={{
                            placeholder: "email",
                            value: email,
                            onChangeText: setEmail,
                            autoComplete: "email",
                            keyboardType: 'email-address',
                            textContentType: "emailAddress",
                        }}
                    />
                    <Button title="Restore" color='solid' />
                </View>
            </View>
        </AuthLayout>
    )
}