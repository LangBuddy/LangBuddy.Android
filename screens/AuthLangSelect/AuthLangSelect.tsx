import { View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { global } from "../../global";
import Button from "../../components/Button/Button";

export default function AuthLangSelect() {
    return (
        <AuthLayout
            subtitle="What languages do you want to learn?">
            <View style={global.authMain}>
                <Button title="Add language" color="linear" />
                <Button title="Continue" color='solid' />
            </View>
        </AuthLayout>
    )
}