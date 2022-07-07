import React from "react";

export const TodoFooter = () => {
  return (
    <div>
      <label>
        <input type="radio" name="todo" value="all" />
        <span>All</span>
      </label>
      <label>
        <input type="radio" name="todo" value="active" />
        <span>Active</span>
      </label>
      <label>
        <input type="radio" name="todo" value="completed" />
        <span>Completed</span>
      </label>
    </div>
  );
};
