import { Text, View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { styles } from "./styles";
import { global } from "../../global";
import Input from "../../components/Input";
import { Calendar, User, Gender } from "../../components/Icon";
import Button from "../../components/Button/Button";

export default function AuthPersonalInformation() {
    return (
        <AuthLayout>
            <View style={styles.authPersonalInformation}>
                <Text style={global.authSubtitle}>
                    Information about yourself
                </Text>
                <View style={styles.authPersonalInformationForm}>
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
                    <Button title="Continue" color="solid" />
                </View>
            </View>
        </AuthLayout>
    )
}