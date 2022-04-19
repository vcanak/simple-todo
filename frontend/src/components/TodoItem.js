import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../services/todoApi";

import styles from "../styles/todoItem.module.css";

const TodoItem = ({ item }) => {
  const inputRef = useRef(true);
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = async (id, value, e) => {
    if (e.which === 13) {
      //update when enter is pressed 13 is key ascii code for enter
      await updateTodo({ id: id, content: value, isDone: item.isDone });

      inputRef.current.disabled = true;
    }
  };
  const markComplete = async (id, content, isDone) => {
    await updateTodo({ id: id, content: content, isDone: !isDone });
  };

  const deleteHandler = async (id) => {
    await deleteTodo(item.id);
  };
  return (
    <motion.li
      key={item.id}
      className={styles.card}
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{ scale: 0.9, transition: { type: "spring", duration: 0.1 } }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.content}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className={styles.btns}>
        <motion.button
          onClick={() => changeFocus()}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiFillEdit />
        </motion.button>
        {!item.completed && (
          <motion.button
            onClick={() => markComplete(item.id, item.content, item.isDone)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoCheckmarkDoneSharp color="green" />
          </motion.button>
        )}

        <motion.button
          onClick={() => deleteHandler(item.id)}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoClose color="red" />
        </motion.button>
      </div>
      {item.isDone && <span className={styles.done}>done</span>}
    </motion.li>
  );
};

export default TodoItem;
