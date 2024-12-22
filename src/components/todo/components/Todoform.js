import React, {useState} from "react";

export const Todofrom =({addTodo}) => {
    const [value , setvalue] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); 

        addTodo (value);

        setvalue("");
        
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Shno baghi tkhdem lyouma ?" onChange={(e) => setvalue(e.target.value)}/>
            <button type="submit" className="todo-btn">zid Khedma</button>
        </form>
    )
}