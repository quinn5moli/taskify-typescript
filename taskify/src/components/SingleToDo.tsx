import React, {useEffect, useRef, useState} from 'react'
import { ToDo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    index: number;
    toDo: ToDo,
    ToDos:ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>

}

const SingleToDo = ({index, toDo, ToDos, setToDos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo)


  const handleDone = (id: number) => {
      setToDos(
        ToDos.map((toDo)=> 
          toDo.id === id?{...toDo, isDone:!toDo.isDone} : toDo
        )
      );
  };

  const handleDelete = (id:number) => {
    setToDos(ToDos.filter((toDo) => toDo.id !== id));
  };

  const handleEdit = (e:React.FormEvent, id: number) => {
      e.preventDefault();

      setToDos(ToDos.map((toDo) => (
          toDo.id === id ? {...toDo, toDo: editToDo} : toDo))
      );
      setEdit(false);
  }

  useEffect(() => {
      inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Draggable draggableId={toDo.id.toString()} index={index}>
        {(provided) => (
            <form 
              className="todos-single" 
              onSubmit={(e) => handleEdit(e,toDo.id)}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
                {edit ? (
                    <input 
                        ref={inputRef}
                        value={editToDo} 
                        onChange={(e) => setEditToDo(e.target.value)} 
                        className="todos-single-text" />
                ) : toDo.isDone ? (
                    <s className="todos-single-text">{toDo.toDo}</s>
                    ) : (
                    <span className="todos-single-text">{toDo.toDo}</span>
                    )}
            

                <div>
                    <span 
                        className="icon" 
                        onClick={() =>{
                            if(!edit && !toDo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                    >
                        <AiFillEdit />
                    </span>
                    <span className="icon" onClick={() =>handleDelete(toDo.id)}>
                        <AiFillDelete />
                    </span>
                    <span className="icon" onClick={() =>handleDone(toDo.id)}>
                        <MdDone />
                    </span>
                </div>
            </form>
        )}
        
    </Draggable>
  )
}

export default SingleToDo