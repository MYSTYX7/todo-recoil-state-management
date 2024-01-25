import { useRecoilValue } from "recoil";
import { todoListAtom } from "../recoilStore/atoms";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div>
      {/* {todoList.map((todoItem) => ())} */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
