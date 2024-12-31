function App() {
  const onDelete = (targetId) => { 
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;