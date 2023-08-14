import { Text, View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { styles } from "./styles";
import { global } from "../../global";
import Input from "../../components/Input";
import { Calendar, User, Gender } from "../../components/Icon";
import Button from "../../components/Button/Button";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { AuthNavigationScreens } from "../../navigations/AuthNavigation/types";

interface IAuthPersonalInformation {
    navigation?: NavigationProp<ParamListBase, string>
}

export default function AuthPersonalInformation({ navigation }: IAuthPersonalInformation) {
    return (
        <AuthLayout>
            <View style={global.authMain}>
                <Text style={global.authSubtitle}>
                    Information about yourself
                </Text>
                <View style={global.authForm}>
                    <Input
                        icon={User}
                        options={{
                            placeholder: 'First Name'
                        }} />
                    <Input
                        icon={User}
                        options={{
                            placeholder: 'Last Name'
                        }} />
                    <Input
                        icon={Calendar}
                        options={{
                            placeholder: 'Birthday'
                        }} />
                    <Input
                        icon={Gender}
                        options={{
                            placeholder: 'Gender'
                        }} />
                    <Button title="Continue" color="solid"
                        onPress={() => navigation?.navigate(AuthNavigationScreens.AuthRegionSettings)} />
                </View>
            </View>
        </AuthLayout>
    )
}