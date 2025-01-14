const TodoContext = createContext();

return (
  <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
    {children}
  </TodoContext.Provider>
);