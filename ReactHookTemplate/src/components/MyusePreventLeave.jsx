import {useState} from "react";

const usePreventLeave = () =>{
    const listener = (event) =>{
        event.preventDefault();
        event.returnValue =  "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload" ,listener)
    const disablePrevent = () => window.addEventListener("beforeunload",listener)

    return{enablePrevent, disablePrevent};
} 

const  MyusePreventLeave = () =>{
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
        <div className ="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>unProtect</button>
        </div>
    )
}

export default MyusePreventLeave;