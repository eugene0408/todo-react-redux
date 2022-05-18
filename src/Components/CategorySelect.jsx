import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {changeCategory, filterTodos} from "../store/todoSlice";


 
const CategorySelect = () => {

    const [categoriesExpanded, setCategoriesExpanded] = useState(false)
    const [categoriesList, setCategoriesList] = useState([])
    const categories = ["all", "completed", "uncompleted"];
    const curCategory = useSelector(state => state.todos.curCategory);
    const dispatch = useDispatch();

    // Show/hide categories select
    const categoriesExpandHandler = ()=> {
        setCategoriesList(categories.filter((el)=> el !== curCategory));
        setCategoriesExpanded(!categoriesExpanded);
    }
    // Change current category
    const changeCategoryHandler = (e)=> {
        e.stopPropagation();
        dispatch(changeCategory({value: e.target.value}));
        dispatch(filterTodos());
        setCategoriesExpanded(!categoriesExpanded);
    }

  return (
    <motion.div
        className="status-select"
        onClick={categoriesExpandHandler}
        layout
    >

        <motion.button 
            className={`status-btn status-btn__${curCategory}`}
             layout="position"
        >
            <motion.h3
                className="status-header"
                layout="position"
                transition={{duration: 0.5, type: "spring"}}
            >
                Display:
            </motion.h3>
                {curCategory}       
        </motion.button>

        { categoriesExpanded &&

            <motion.div 
                className="status-select_expanded"
            >
                {
         
                    categoriesList.map((el, index) => 
                        (
                            <motion.button
                                className={`status-btn status-btn__${el}`}
                                onClick={changeCategoryHandler}
                                value={`${el}`}
                                key={Math.random()*1000}
                                layout="position"
                                transition={{duration: index + 0.7, type: "spring"}}
                                initial={{opacity: 0, x: -40}}
                                animate={{opacity: 1, x: 0}}
                            >
                                {el}
                            </motion.button>
                        )
                    )

                }
            </motion.div>

        }
    </motion.div>
  )
}

export default CategorySelect