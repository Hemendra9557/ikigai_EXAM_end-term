import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const ToDoItem = (props) => {

const deleteHandler = () => {
    console.log(props.todo);  
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id)); 

}

const completeHandler = () => {
    props.setTodos(props.todos.map((item) => {
        if(item.id === props.todo.id){
            return {
                ...item, completed: !item.completed   
            }
        }
        return item;
    }))
}



// i want to edit the todo item when the edit button is clicked






  return (
    <Fragment>
        <div className="todo">
                    <li className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.text}</li> 
                    {/* //here i am adding the class completed to the li element if the completed property of the todo object is true. */}

                    {/* <button className="edit-btn">
                    <FontAwesomeIcon icon={faEdit} />
                    </button> */}
                    <button onClick={completeHandler} className="complete-btn">
                    <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={deleteHandler} className="trash-btn">
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
      
    </Fragment>
  )
}

export default ToDoItem
