import React, { useEffect, useState } from "react";
import {userInfo} from '../../../services/users.js'
import apiData from '../../../services/api.js'
const UserInfo = () => {

    const [infoU, setInfo] = useState({});

    useEffect(() => {
        
        let abortController = new AbortController();  
    // your async action is here  
    user()
        return () => {  
        abortController.abort();  
        }  
    }, [])

    const user =async() => { 
        const info = await userInfo(apiData.url, apiData.id, apiData.header)
        console.log(info)
        setInfo(info)
    }


    return (
        <div>
            <p>{infoU.nameUser}</p>
        </div>
    )
}

export default UserInfo