import { EXAMPLES } from "../../data.js"
import { useState } from "react"
export default function Tabs(){
    const [text, setText] = useState()
    const [active, setActive] = useState()

    function handleChange(e, index){
        setText(e);
        setActive(index)
    }

    let content;
    if(text){
        content = 
        <div id="tab-content">
            <h3>{text.title}</h3>
            <p>{text.description}</p>
        </div>
    } else{
        content = "Choose a challange 😈"
    }
    return(
        <section id="examples">
            <menu>
            <button onClick={() => handleChange(EXAMPLES[0], 0)}
                className={active === 0 ? 'active' : ''}>Easy</button>
            <button onClick={() => handleChange(EXAMPLES[1], 1)}
                className={active === 1 ? 'active' : ''}>Medium</button>
            <button onClick={() => handleChange(EXAMPLES[2], 2)}
                className={active === 2 ? 'active' : ''}>Hard</button>
            <p>{content}</p>
            </menu>
        </section>
    )
}