import {useState} from "react";

const useInput = (initialValue, validator) => {
    const[value, setValue] = useState(initialValue);
    const onChange = event =>{
        const {
            target : {value}
        } = event;
        let willUpdate = true;

        if(typeof validator === "function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return {value, onChange};
}

const MyuseInput = () =>{
    const maxLen = (value) => value.length <= 10;
    const checkName = (value) => !value/incluse("@");
    const name = useInput("Mr." , maxLen);
    return (
        <div classNae ="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name}/>
        </div>
      )
}

export default MyuseInput;