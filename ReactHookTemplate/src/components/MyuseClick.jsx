import {useEffect, useRef, useState} from "react";


const useClick = (onClick) =>{
    if(typeof onClick !== "function"){
        return;
    }
    const element = useRef();
    useEffect( () => {
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () =>{
            if(element.current){
                element.current.removeEventListener("click", onClick)
            }
        }
    }, []);
    return element;
}

const MyuseClick = () =>{
    const sayHello = () => console.log("sayl Hello");
    const title = useClick(sayHello);
    return (
        <div className ="App">
            <h1 ref = {title}>Hello</h1>
        </div>
    )
}

export default MyuseClick;