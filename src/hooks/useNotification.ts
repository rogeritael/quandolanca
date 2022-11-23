import { useState, useEffect } from "react";
import { api } from "../utils/api";

export function useNotifications(){
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        api({
            method: 'get',
            url: 'users/getuser'
        })
        .then(response => {
            setNotifications(response.data.user.usernotifications);
        });
    }, [])

    async function generateNotifications(releaseDate: string, releaseName: string){

        const newdate = new Date(); 
        const current_date = Date.parse(newdate as any);

        const release_date = Date.parse(releaseDate);

        const howLongToRelease = parseInt(((release_date - current_date) / 86400000).toFixed(0));


        let stage = 0;
        let type = '';
        let description = '';

        if(howLongToRelease <= 30 && howLongToRelease > 15){
            type = 'EM BREVE';
            stage = 1;
            description = `${releaseName} lança daqui à ${howLongToRelease} dias.`;

        }else if(howLongToRelease <= 15 && howLongToRelease > 7){
            type = 'EM BREVE';
            stage = 2;
            description = `${releaseName} lança daqui à ${howLongToRelease} dias.`;

        }else if(howLongToRelease <= 7 && howLongToRelease > 1){
            type = 'CONTAGEM REGRESSIVA';
            stage = 3;
            description = `faltam ${howLongToRelease} dias para o lançamento de ${releaseName}.`;

        }else if(howLongToRelease === 1){
            type = 'AMANHÃ';
            stage = 4;
            description = `${releaseName} chega amanhã! \0/`;

        }else if(howLongToRelease === 0){
            type = 'DIRETO DO FORNO';
            stage = 5;
            description = `${releaseName} lança hoje! uhu`;

        }else if(howLongToRelease < 0 && howLongToRelease > -15){
            type = 'LANÇOU';
            stage = 6;
            description = `${releaseName} lançou há ${howLongToRelease} dias.`;

        }else if(howLongToRelease <= -15){
            type = 'LANÇOU';
            stage = 7;
            description = `${releaseName} lançou há ${howLongToRelease} dias.`;
        }

        if( stage !== 0 ){

            await api({
                method: "post",
                url: "/usernotifications/create",
                data: {
                    type, stage, description, releaseName
                }
            })
            .then(response => {
                // alert("criou notificação");
            })
            .catch(err => {
                // alert("erro ao criar notificação");
            });

        }
    }

    return { generateNotifications, notifications, setNotifications }
}