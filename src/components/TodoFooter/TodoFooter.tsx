import React, { ChangeEvent } from "react";
import { FilterType, TodoListContext } from "../../contexts/useTodoContext";

export const TodoFooter = () => {
  const { setFilter } = React.useContext(TodoListContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value as FilterType);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="todo"
          value="all"
          defaultChecked
          onChange={handleOnChange}
        />
        <span>All</span>
      </label>
      <label>
        <input
          type="radio"
          name="todo"
          value="active"
          onChange={handleOnChange}
        />
        <span>Active</span>
      </label>
      <label>
        <input
          type="radio"
          name="todo"
          value="completed"
          onChange={handleOnChange}
        />
        <span>Completed</span>
      </label>
    </div>
  );
};
