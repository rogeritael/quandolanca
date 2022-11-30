import bus from '../utils/bus';

interface IConfirmModal {
    title: string;
    description: string;
    acceptText: string;
    rejectText: string;
    onAccept: () => void;
}

export function useConfirmModal(){
    function setConfirmModal({title, description, acceptText, rejectText, onAccept} : IConfirmModal){
        bus.emit("confirmmodal", {
            title, description, acceptText, rejectText, onAccept
        })
    }

    return { setConfirmModal }
}