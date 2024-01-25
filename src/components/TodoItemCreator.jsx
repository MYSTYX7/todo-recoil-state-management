import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../recoilStore/atoms";
import { useState } from "react";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListAtom);

  let id = 0;
  const getId = () => {
    return id++;
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add Task</button>
    </div>
  );
};

export default TodoItemCreator;
