import {useEffect, useState, useRef} from "react";

const useNotification = (title, options) =>{
    if(!("Notification" in window)){
        return;
    }
    const fireNotif = () =>{
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === "granted"){
                    new Notification(title, options)
                }else{
                    return;
                }
            })
        }else{
            new Notification(title, options)
        }
    }
    return fireNotif;
}

const  MyuseNotification = () => { 
    const triggerNotif = useNotification("Can I steel your kimchi", 
    {
        body:"I love kimchi dont you"
    });
    return (
        <div className ="App">
            <div>
                <button onClick={triggerNotif}>Hello</button>
            </div>
        </div>
    )
}
export default MyuseNotification;