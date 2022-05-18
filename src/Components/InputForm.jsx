import { motion } from "framer-motion"
import { ReactComponent as PlusIcon} from "../assets/plus.svg";
import { ReactComponent as CloseIcon} from "../assets/cross.svg";

const InputForm = ({
    title,
    text,
    inputActivated,
    setTitle,
    setText,
    setInputActivated,
    addTodoHandler
}) => {

    const closeHandler = () => {
        setTitle('');
        setText('');
        setInputActivated(false);
    }


  return (
    <motion.form 
        className="input-form"
        onSubmit={(e)=> e.preventDefault()}
        layout
    >
        <motion.input 
            type="text" 
            placeholder="Add New"
            onClick={()=> setInputActivated(true)}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            layout='position'
        />

        { inputActivated &&
            <motion.button
                className="close-btn"
                onClick={closeHandler}
                layout='position'
            >
                <CloseIcon />
                
            </motion.button>
        }

        { inputActivated && 

            <motion.div style={{position: "relative"}}>

                <motion.textarea 
                    placeholder="Description"
                    rows={3}
                    onChange={(e) => setText(e.target.value)}
                    value={text} 
                    layout
                >      
                </motion.textarea>

                <motion.button 
                    className="add-btn"
                    type="submit"
                    onClick={(e)=> {
                        e.preventDefault();
                        addTodoHandler();
                    }}
                    layout="position"
                >
                    <PlusIcon />
                    
                </motion.button>
                
            </motion.div>

         }

    </motion.form>
  )
}

export default InputForm