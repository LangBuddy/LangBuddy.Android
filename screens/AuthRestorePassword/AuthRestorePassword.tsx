import React from "react";
import { View } from "react-native";

import AuthLayout from "layouts/AuthLayout/AuthLayout";
import Input from "components/Input";
import Button from "components/Button/Button";
import { Email } from "components/Icon";
import { global } from "global/styles";

import { styles } from "./styles";

export default function AuthRestorePassword() {
    const [email, setEmail] = React.useState<string>("");

    return (
        <AuthLayout
            subtitle="Restore Password">
            <View style={global.authMain}>
                <View style={global.authForm}>
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