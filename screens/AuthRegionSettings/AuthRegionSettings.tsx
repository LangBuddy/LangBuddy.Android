import { View } from "react-native";
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import { global } from "global/styles";
import Input from "components/Input";
import { Translate, World } from "components/Icon";
import Button from "components/Button/Button";
import { AuthNavigationScreens } from "navigators/AuthNavigator/types";

import { IAuthRegionSettings } from "./types";

export default function AuthRegionSettings({ navigation }: IAuthRegionSettings) {
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
                    <Button title="Continue" color="solid"
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthLangSelect)} />
                </View>
            </View>
        </AuthLayout>
    )
}