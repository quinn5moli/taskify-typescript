import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css'

interface Props{
    ToDos: ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setCompletedToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({
    ToDos, 
    setToDos, 
    completedToDos, 
    setCompletedToDos}
) => {
  return (
    <div className="container">
        <Droppable droppableId="ToDosRemove">
            {(provided) => (
              <div 
                className="todos" 
                ref={provided.innerRef} 
                {...provided.droppableProps}
            >
                <span className="todos-heading">
                    Active Tasks
                </span>
                {ToDos.map((toDo, index) => (
                    <SingleToDo 
                        index={index}
                        toDo={toDo} 
                        ToDos={ToDos} 
                        key={toDo.id} 
                        setToDos={setToDos} 
                    />
                ))}
                {provided.placeholder}
              </div>
            )}
            
        </Droppable>
        
        <Droppable droppableId="ToDosList">
            {(provided) => (
            <div 
              className="todos remove"
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
                <span className="todos-heading">
                        Completed Tasks
                </span>
                {completedToDos.map((toDo, index) => (
                    <SingleToDo 
                        index={index}
                        toDo={toDo} 
                        ToDos={completedToDos} 
                        key={toDo.id} 
                        setToDos={setCompletedToDos} 
                    />
                ))}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
    </div>
  )
}

export default ToDoList;