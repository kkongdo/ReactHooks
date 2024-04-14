import {useEffect, useState, useRef} from "react";


const useFullscreen = (callback) =>{
    const element = useRef();

    const triggerFull = () =>{
        if(element.current){
            elementType.current.requestFullscreen();
            if(callback && typeof callback === "function"){
               callback(true);
            }
        }

    }
    const exitFull = () =>{
        document.exitFullscreen();
        if(callback && typeof callback === "function"){
            callback(false);
         }
    }
    return { element, triggerFull, exitFull };
}

const  MyuseFullscreen = () => { 
    const onFulls = (isFull) =>{
        console.log(isFull ? "we are ful" : "we are small")
    }
    const {element, triggerFull , exitFull} = useFullscreen(onFulls);
    return (
        <div className ="App">
            <div>
                <img ref={element} src="">
                </img>
                <button onClick={exitFull}>Exit MyuseFullscreen</button>
                <button onClick={triggerFull}>Make MyuseFullscreen</button>
            </div>
        </div>
    )
}
export default MyuseFullscreen;