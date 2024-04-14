import {useEffect, useState, useRef} from "react";

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () =>{
        if(typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }
    useEffect( () =>{
        window.addEventListener("onLine", handleChange);
        window.addEventListener("offLine", handleChange);
        () =>{
            window.removeEventListener("onLine", handleChange);
            window.removeEventListener("offLine", handleChange);
        }
    }, [])
    return status;
}

const  MyuseNetwork = () => {
    const handleNetworkChange = (online) =>{
        console.log(online ? "we just went online" : "we are Offline")
    }
    const onLine = useNetwork();
    return (
        <div className ="App">
           <h1>{onLine ? "Online" : "OffLine"}</h1>
        </div>
    )
}
export default MyuseNetwork;