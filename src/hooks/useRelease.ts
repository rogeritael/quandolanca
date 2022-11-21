import { useState } from "react";

export function useAuth(){
    const [isMainListResultsFound, setIsMainListResultsFound] = useState(true);
    const [mainList, setMainList] = useState([]);

    async function addReleaseToMyList(){

    }

    async function removeReleaseFromMyList(){
        
    }

}