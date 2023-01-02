import React from "react";
import ListItem from "./ListItem";

const List = React.memo(({ todoData, setTodoData, deleteClick }) => {
  // console.log("List Rendering...");
  return (
    <div>
      {todoData.map((item) => (
        // item = { id: 1, title: "할일 1", completed: false },
        // item = { id: 2, title: "할일 2", completed: true },
        // item = { id: 3, title: "할일 3", completed: false },
        // item = { id: 4, title: "할일 4", completed: false },
        <div key={item.id}>
          <ListItem
            item={item}
            todoData={todoData}
            setTodoData={setTodoData}
            deleteClick={deleteClick}
          />
        </div>
      ))}
    </div>
  );
});

export default List;
