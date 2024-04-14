import {useState} from "react";


const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section2"
    },
]

const useTabs = (initialTab, allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    const [currentIndex , setCurrentIndex] = useState(initialTab)
    return {
        currentItem : allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const MyuseTabs = () =>{
    const {currentItem, changeItem }= useTabs(0, content);
    return (
        <div classNae ="App">
            {content.map( (section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
           <div>{currentItem.content}</div> 
        </div>
    )
}

export default MyuseTabs;