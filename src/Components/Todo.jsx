import { motion } from "framer-motion";
import { ReactComponent as TrashIcon} from "../assets/trash.svg";
import { ReactComponent as CheckedIcon} from "../assets/check.svg";
// Redux
import { useDispatch } from "react-redux";
import {toggleComplete, toggleExpand, removeTodo} from '../store/todoSlice';

const Todo = ({
    id,
    title,
    text,
    completed, 
    isOpen
}) => {

    const dispatch = useDispatch();

  return (
      <motion.div 
        className="card"
        transition={{layout:{duration: 0.8, type: "spring"}}}
        layout 
        onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleExpand({id}));
        }}
        style={{
            borderRadius: "1.2rem", 
            boxShadow: "0px 10px 25px rgba(#000, 0.5)"
        }}
                
    >
        <motion.h2 
            layout="position" 
            className={completed ? "completed" : "uncompleted"}
        >
            {title}
        </motion.h2>

        <motion.div 
            className="buttons-wrapper" 
            layout="position"
        >

            <button 
                className="chk-btn"
                onClick={(e)=> {
                    e.stopPropagation();
                    dispatch(toggleComplete({id}));
                }}
            >
                <CheckedIcon />
            </button>


            <button 
                className="del-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeTodo({id}));
                }}
            >
                <TrashIcon/>
            </button>

        </motion.div>


        {isOpen && 
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, type: "spring"}}
                className="expand"
            >
                <p>
                    {text}
                </p>   
            </motion.div>
        }

    </motion.div>
  )
}

export default Todo