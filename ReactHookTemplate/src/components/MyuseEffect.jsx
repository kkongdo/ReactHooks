import {useEffect, useState} from "react";

const sayHello = () => {
   console.log("hello");
}

const MyuseEffect = () =>{
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    // useEffect( ()=>{
    //     sayHello();
    // })
    useEffect(sayHello, );
    return (
        <div className ="App">
            <h1>Hello</h1>
            <button onClick={ () => setNumber(number + 1)}>{number}</button>
            <button onClick={ () => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    )
}

export default MyuseEffect;