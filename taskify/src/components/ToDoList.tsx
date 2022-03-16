import React from 'react'
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css'

interface Props{
    ToDos: ToDo[];
    setToDos:React.Dispatch<React.SetStateAction<ToDo[]>>;

}

const ToDoList: React.FC<Props> = ({ToDos, setToDos}: Props) => {
  return (
    <div className="todos">
        {
            ToDos.map(toDo => (
                <SingleToDo 
                  toDo={toDo} 
                  key={toDo.id} 
                  ToDos={ToDos}
                  setToDos={setToDos}
                />
            ))
        }
    </div>
  )
}

export default ToDoList;