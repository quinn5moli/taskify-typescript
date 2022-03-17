import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './model';
import { DragDropContext } from 'react-beautiful-dnd';

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("")
  const [ToDos, setToDos] = useState<ToDo[]>([])
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...ToDos, { id: Date.now(), toDo, isDone: false}])
      setToDo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList 
          ToDos={ToDos} 
          setToDos={setToDos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
