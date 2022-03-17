import React from 'react'
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css'

interface Props{
    ToDos: ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setCompletedToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ToDos, setToDos}: Props) => {
  return (
    <div className="container">
        <div className="todos">
            <span className="todos-heading">
                Active Tasks
            </span>
            {ToDos.map((toDo) => (
                    <SingleToDo 
                      toDo={toDo} 
                      ToDos={ToDos} 
                      key={toDo.id} 
                      setToDos={setToDos} 
                    />
                ))}
        </div>
        <div className="todos remove">
        <span className="todos-heading">
                Completed Tasks
        </span>
            {ToDos.map((toDo) => (
                    <SingleToDo 
                      toDo={toDo} 
                      ToDos={ToDos} 
                      key={toDo.id} 
                      setToDos={setToDos} 
                    />
                ))}
        </div>
    </div>
  )
}

export default ToDoList;