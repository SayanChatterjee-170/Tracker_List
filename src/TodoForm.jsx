import { useState } from "react";
import {v4 as uuid} from "uuid"
import {toast} from "react-toastify";
// eslint-disable-next-line react/prop-types
function TodoForm({addTodo}) {
    const [title,setTitle] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(title.trim().length ===0)
        {
            toast.error("Please fill input",{autoClose:2000},)
            return
        }
        const newTodo = {title: title, completed:false, id: uuid()}
        addTodo(newTodo)
        setTitle('') 
    }
    return (
        <form onSubmit={handleSubmit}
        className="todoForm">
         <input type="text"
         className="todoForm_input" 
         value={title} 
         onChange={(e) => setTitle(e.target.value)} />
         <button type="submit"
         className="todoForm_btn"
         >Add</button>
            
        </form>
    )
}

export default TodoForm
