import React from 'react'
import { ToDo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

type Props = {
    toDo: ToDo,
    ToDos:ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>

}

const SingleToDo = ({toDo, ToDos, setToDos}: Props) => {
  const handleDone = (id: number) => {
      setToDos(
        ToDos.map((toDo)=> 
          toDo.id === id?{...toDo, isDone:!toDo.isDone} : toDo
        )
      )
  }
  return (
    <form className="todos-single">
        {
            toDo.isDone ? (
              <s className="todos-single-text">{toDo.toDo}</s>
            ) : (
              <span className="todos-single-text">{toDo.toDo}</span>
            )
        }

        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() =>handleDone(toDo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleToDo