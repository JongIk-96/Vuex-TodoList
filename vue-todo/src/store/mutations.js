const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  state.todoItems.splice(payload.index, 1);
  localStorage.removeItem(payload.todoItem.item);
};
const toggleOneItem = (state, payload) => {
  payload.todoItem.completed = !payload.todoItem.completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
