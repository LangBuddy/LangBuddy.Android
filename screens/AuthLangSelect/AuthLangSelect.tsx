import { FlatList, View, Text } from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { global } from "../../global";
import Button from "../../components/Button/Button";
import React from "react";
import ModalWindow from "../../components/ModalWindow";
import Input from "../../components/Input";
import { Translate } from "../../components/Icon";
import { styles } from "./styles";
import LangComponent from "./components/LangComponent";

export default function AuthLangSelect() {
    const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);
    const [language, setLanguage] = React.useState<string>("");
    const [languagesList, setLanguagesList] = React.useState<string[]>([]);

    const handleRemoveItem = (index: number) => {
        setLanguagesList([
            ...languagesList.slice(0, index),
            ...languagesList.slice(index+1, languagesList.length),
        ])
    }
    
    const getModalWindow = () => {
        const handleAddLanguage = (text: string) => {
            setLanguagesList([...languagesList, text]);
            setLanguage("");
            setIsVisibleModal(false);
        }

        return (
            <ModalWindow isVisible={isVisibleModal}
                title="Add language"
                onClose={() => setIsVisibleModal(false)}>
                <View style={global.authForm}>
                    <Input
                        icon={Translate}
                        options={{
                            placeholder: 'Language',
                            value: language,
                            onChangeText: setLanguage

                        }} />
                    <Button title="Add" color="solid"
                        onPress={() => handleAddLanguage(language)} />
                </View>
            </ModalWindow>
        )
    }

    return (
        <AuthLayout
            subtitle="What languages do you want to learn?">
            <View style={styles.authLangSelectContainer}>
                <Button title="Add language" color="linear"
                    onPress={() => setIsVisibleModal(true)} />
                <FlatList style={styles.authLangSelectList}
                    data={languagesList}
                    renderItem={({ item }) =>
                        <LangComponent text={item} 
                        onPress={() => handleRemoveItem(languagesList.findIndex((el) => el === item))}/>
                    } />
                <Button title="Continue" color='solid' />
            </View>
            {isVisibleModal &&
                getModalWindow()
            }
        </AuthLayout>
    )
}