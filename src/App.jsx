import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () =>{
  return(
    <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] 
                    bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>
        </div>
        <form className="bg-white rounded-md mt-8
                        overflow-hidden py-4 px-4 flex items-center gap-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className="w-full text-gray-400 outline-none"
          type="text" placeholder="Create a new todo..."></input>
        </form>
      </header>  
      <main className="px-4 containter mx-auto mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-700 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
            <button className="flex-none" ><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-700 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
            <button className="flex-none" ><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-700 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
            <button className="flex-none" ><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-700 border-b">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">complete online javascript curse in bluuweb</p>
            <button className="flex-none" ><CrossIcon/></button>
          </article>
          
          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">clear completed</button>
          </section>
        </div>
      </main>
      <section className="px-4 containter mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">all</button>
          <button className="hover:text-blue-600">active</button>
          <button className="hover:text-blue-600">completed</button>
        </div>
      </section>
      <section className="text-center mt-8">Drag and dorp to reorder list</section>
    </div>
    )
}
export default App;