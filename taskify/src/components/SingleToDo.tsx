import React from 'react'
import { ToDo } from '../model'
import { AiFillEdit } from 'react-icons/ai'

type Props = {
    toDo: ToDo,
    ToDos:ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>

}

const SingleToDo = ({toDo, ToDos, setToDos}: Props) => {
  return (
    <form className="todos-single">
        <span className="todos-single-text">{toDo.toDo}</span>

        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon"></span>
            <span className="icon"></span>
        </div>
    </form>
  )
}

export default SingleToDo