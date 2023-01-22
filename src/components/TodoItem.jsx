import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";
const TodoItem=({todo,removeTodo,updateTodo})=>{
    const {id,title,completed}=todo;
    const styleChecked="bg-gradient-to-r from-cyan-200 to-indigo-500 flex justify-center items-center";
    const styleUnChecked=" inline-blocks";
    return(
        <>
            <article className="flex gap-4 border-b-gray-700 border-b">
                <button onClick={(e)=>updateTodo(id)} className={`w-5 h-5 flex-none rounded-full border-2 ${
                        completed? styleChecked
                                :styleUnChecked
                            }`}>{completed && <CheckIcon/>}</button>
                <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
                <button onClick={()=>removeTodo(id)} className="flex-none" ><CrossIcon/></button>
            </article>
        </>
    )
}
export default TodoItem;