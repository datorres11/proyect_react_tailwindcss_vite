const TodoFilter =({changeFilter,filter})=>{
    return(
        <section className=" containter mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className={`${
            filter==="all"
            ?"text-blue-500 hover:text-gray-400"
            :"text-gray-400 hover:text-blue-500"
            }`}
            onClick={()=>changeFilter("all")}>all</button>
          <button className={`${
            filter==="all"
            ?"text-blue-500 hover:text-gray-400"
            :"text-gray-400 hover:text-blue-500"
            }`}onClick={()=>changeFilter("active")}>active</button>
          <button className={`${
            filter==="all"
            ?"text-blue-500 hover:text-gray-400"
            :"text-gray-400 hover:text-blue-500"
            }`} onClick={()=>changeFilter("completed")}>completed</button>
        </div>
        </section>
    )
}
export default TodoFilter;