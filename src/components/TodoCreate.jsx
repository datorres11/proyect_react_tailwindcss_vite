import { useState } from "react";

const TodoCreate = ({createTodo}) =>{

    const [title,setTitle]= useState("");

    const handleSumbit=(e)=>{
        e.preventDefault();
        if(!title.trim()){
            return setTitle("");
        }
        createTodo(title);
        setTitle("")        
    }

    return(
    <form onSubmit={handleSumbit} className="bg-white rounded-md mt-8
    overflow-hidden py-4 px-4 flex items-center gap-4">
    <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
    <input className="w-full text-gray-400 outline-none"
    type="text" placeholder="Create a new todo..." value={title}
    onChange={(e)=>setTitle(e.target.value)}></input>
    </form>
)

}

export default TodoCreate;