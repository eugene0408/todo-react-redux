import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import './App.css';


import {addTodo, filterTodos} from './store/todoSlice'

// Components
import InputForm from './Components/InputForm';
import CategorySelect from './Components/CategorySelect';
import TodosList from './Components/TodosList';

function App() {
  // States
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [inputActivated, setInputActivated] = useState(false)
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();
  

  const addTodoHandler = () => {
    if(title.trim().length) {
      dispatch(addTodo({title, text}));
      setTitle('');
      setText('');
    }
  }

  // Effect
  useEffect(() => {
    dispatch(filterTodos());
    }, [todos]);

  return (
    <div className="App">

      <div className="forms-container">

        <InputForm
            title={title}
            text={text}
            inputActivated={inputActivated}
            setTitle={setTitle}
            setText={setText}
            setInputActivated={setInputActivated}
            addTodoHandler={addTodoHandler}
        />

        <CategorySelect />

      </div>

      <TodosList />
    
    </div>
  );
}

export default App;


