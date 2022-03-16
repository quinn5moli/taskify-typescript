import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './model';

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("")
  const [ToDos, setToDos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...ToDos, { id: Date.now(), toDo, isDone: false}])
      setToDo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
