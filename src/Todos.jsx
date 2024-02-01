/* eslint-disable react/prop-types */
import Todo from "./Todo"
function Todos({todoDetails,toggleCompleted,removeTodo}) {
    return (
        <div>
        {
           
            todoDetails.map((todo) => 
            <Todo {...todo} 
            key={todo.id}
            toggleCompleted = {toggleCompleted}
            removeTodo = {removeTodo}
            />)
        }
            
        </div>
    )
}

export default Todos
