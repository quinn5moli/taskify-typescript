import React from 'react'
import './styles.css'

interface Props{
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, handleAdd }: Props) => {
  return (
  <form className= "input" onSubmit={handleAdd}>
      <input type="input" 
        value={toDo}
        onChange={
            (e) => setToDo(e.target.value)
        }
        placeholder= "Enter a task" 
        className="input-box" />
      <button className="input-submit" type="submit">Go</button>
  </form>
  );
};

export default InputField