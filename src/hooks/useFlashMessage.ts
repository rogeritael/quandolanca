import bus from '../utils/bus';

interface FlashMessageProps {
    message: string,
    type: string
}

export function useFlashMessage(){
    function setFlashMessage({message, type} : FlashMessageProps){
        bus.emit("flash", {
            message, type
        })
    }

    return { setFlashMessage }
}