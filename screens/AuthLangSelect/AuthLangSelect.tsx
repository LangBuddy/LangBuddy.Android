import { View } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { global } from "../../global";
import Button from "../../components/Button/Button";
import React from "react";
import ModalWindow from "../../components/ModalWindow";
import Input from "../../components/Input";
import { Translate } from "../../components/Icon";

export default function AuthLangSelect() {
    const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);

    const getModalWindow = () => {
        
        return (
            <ModalWindow isVisible={isVisibleModal}
                title="Add language"
                onClose={() => setIsVisibleModal(false)}>
                <View style={global.authForm}>
                    <Input
                        icon={Translate}
                        options={{
                            placeholder: 'Language'
                        }} />
                    <Button title="Add" color="solid" />
                </View>
            </ModalWindow>
        )
    }

    return (
        <AuthLayout
            subtitle="What languages do you want to learn?">
            <View style={global.authMain}>
                <Button title="Add language" color="linear"
                    onPress={() => setIsVisibleModal(true)} />
                <Button title="Continue" color='solid' />
            </View>
            {isVisibleModal &&
                getModalWindow()
            }
        </AuthLayout>
    )
}