import { Modal, Pressable, View, Text } from "react-native";
import { IModalWindow } from "./types";
import { Email } from "../Icon";
import { styles } from "./style";

export default function ModalWindow({ isVisible, title, onClose, children }: IModalWindow) {
    return (
        <Modal transparent={true} visible={isVisible} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>{title}</Text>
                    <Pressable onPress={onClose}>
                        <Email />
                    </Pressable>
                </View>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}