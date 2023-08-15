import { Text, View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { global } from "../../global";
import Input from "../../components/Input";
import { Translate, World } from "../../components/Icon";
import Button from "../../components/Button/Button";

export default function AuthRegionSettings() {
    return (
        <AuthLayout
            subtitle="Region Settings">
            <View style={global.authMain}>
                <View style={global.authForm}>
                    <Input
                        icon={World}
                        options={{
                            placeholder: 'Country'
                        }} />
                    <Input
                        icon={Translate}
                        options={{
                            placeholder: 'Native Language'
                        }} />
                    <Button title="Continue" color="solid" />
                </View>
            </View>
        </AuthLayout>
    )
}