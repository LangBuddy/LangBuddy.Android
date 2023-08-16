export interface IModalWindow {
    title: string, 
    isVisible: boolean,
    onClose: () => void,
    children?: React.ReactNode,
}