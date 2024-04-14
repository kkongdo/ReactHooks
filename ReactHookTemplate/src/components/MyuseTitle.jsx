import {useEffect, useState} from "react";


const useTitle = (initialTitle) =>{
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () =>{
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle , [title]);
    return setTitle;
}
const MyuseTitle = () =>{
    const titleUpdater = useTitle("Loading...");
    setTimeout( () => titleUpdater("Home", 5000))
    return (
        <div className ="App">
            <h1>Hello</h1>
        </div>
    )
}

export default MyuseTitle;