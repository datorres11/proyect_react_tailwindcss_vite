const TodoComputed =({computedTodo,clearCompleted})=>{
    return(
        <section className="px-4 py-4 flex justify-between rounded-b-md bg-white">
            <span className="text-gray-400">{computedTodo} items left</span>
            <button onClick={clearCompleted} className="text-gray-400">clear completed</button>
          </section>
    )
}
export default TodoComputed;