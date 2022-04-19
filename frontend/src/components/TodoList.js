import React, { useState } from "react";

import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/todoList.module.css";

const TodoList = ({ items }) => {
  const [category, setcategory] = useState("active");
  return (
    <div className={styles.showTodos}>
      <div className={styles.categoryBtns}>
        <motion.button
          onClick={() => setcategory("active")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Active
        </motion.button>
        <motion.button
          onClick={() => setcategory("completed")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Completed
        </motion.button>
        <motion.button
          onClick={() => setcategory("all")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {items.length > 0 && category === "active"
            ? items.map((item) => item.isDone === false && <TodoItem key={item.id} item={item} />)
            : null}

          {/**Completed İtems */}

          {items.length > 0 && category === "completed"
            ? items.map((item) => item.isDone === true && <TodoItem key={item.id} item={item} />)
            : null}

          {/**All İtems */}

          {items.length > 0 && category === "all"
            ? items.map((item) => <TodoItem key={item.id} item={item} />)
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;
