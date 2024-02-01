import { ImCross } from "react-icons/im";
function Todo({id, completed, title, toggleCompleted,removeTodo}) {
    return (
        <div className="todo" >
        <div className="todo-title">
        <input type="checkbox" name="" checked = {completed}
        onChange = {
            () => toggleCompleted(id)}
         />
         <p className={completed === true? "completed":""}>{title}</p>

         </div>

         <div className="cross-btn"
         onClick={() => {removeTodo(id)}}>
        <ImCross />
         </div>
            
        </div>
    )
}

export default Todo;

