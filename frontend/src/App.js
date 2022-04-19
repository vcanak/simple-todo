import TodoList from "./components/TodoList";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import { useTodosQuery } from "./services/todoApi";
import styles from "./styles/home.module.css";

const App = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useTodosQuery();
  console.log("Vedat backend data: ", data);
  return (
    <div className={styles.App}>
      <motion.h1
        className={styles.title}
        whileHover={{ scale: 1.1 }}
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        Todo App
      </motion.h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <TodoList items={data} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
