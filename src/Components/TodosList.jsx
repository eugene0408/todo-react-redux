import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodosList = () => {

    const filteredTodos = useSelector(state => state.todos.filteredTodos)
  
    return (
        <div className="cards-container">
            <div className="cards-wrapper">               
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodosList