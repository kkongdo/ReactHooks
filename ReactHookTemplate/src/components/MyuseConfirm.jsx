import {useState} from "react";

const useConfirm = (message ="", callback, rejection) =>{
    if(typeof callback !== "function"){
        return;
    }
    const confirmAction = () =>{
        if(confirm(message)){
            callback();
        }else{
            rejection();
        }
    }
    return confirmAction;
}


const MyuseConfirm= () =>{
    const deleteworld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure.", deleteworld, abort)
    return (
        <div className ="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default MyuseConfirm;