import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useAddTodoMutation } from "../services/todoApi";

import styles from "../styles/todos.module.css";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [addContact] = useAddTodoMutation();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // add todo backend with redux toolkit query
  const addToBackend = async () => {
    await addContact(todo);
    setTodo("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className={styles.todoInput}
        value={todo}
      />
      <motion.button
        className={styles.addTodoBtn}
        onClick={() => addToBackend()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default Todos;
