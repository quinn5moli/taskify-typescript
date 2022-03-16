import React from 'react'
import { ToDo } from '../model'

type Props = {
    toDo: ToDo,
    ToDos:ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>

}

const SingleToDo = ({toDo, ToDos, setToDos}: Props) => {
  return (
    <div>

    </div>
  )
}

export default SingleToDo