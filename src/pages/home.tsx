import Rocket from "../assets/rocket.svg";
import Plus from "../assets/plus.svg";
import Clipboard from "../assets/Clipboard.svg";
import { useState, type FormEvent } from "react";
import Trash from "/trash.svg"

// tipos de dados 

type myTask={
  id: string;
  title: string;
  completed:boolean;
}
 
export default function Home() {
   const [tasks, setTasks ] = useState<myTask[]>([]);
   const [Newtasks, setNewTasks ] = useState("");

  function handleCreatTasks( event:FormEvent<HTMLFormElement>) {
    event.preventDefault();

  const title = Newtasks.trim();

  if (!title) return;

  console.log("Nova Tarefa:", title);

  const task: myTask = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };

//   console.log("Minha Tarefa:", task);
  setTasks((currentTask ) => [...currentTask, task]);
  setNewTasks("");
}

// MARCAR A TAREFA COMO CONCLUIDA
function handleToggleTask(taskId: string) {
  setTasks((currentTasks) => 
    currentTasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } :
      task
    )
  );
}

  return (
    <main className="text-[#808080]">
       <header className="bg-[#0d0d0d] flex items-center justify-center pt-[72px] pb-[80px]">
        <div className="flex  items-center gap-[12px]">
          <div>
            <img src={Rocket} alt="Rocket" />
          </div>
         <h1 className="text-[40px] font-black">
          <span className="text-[#4EA8DE]">to</span>
          <span className="text-[#5E60CE]">do</span>
         </h1>
        </div>
      </header>
      {/* input com botão */}
      <form
      onSubmit={handleCreatTasks}
      className="max-w-[736px] mx-auto flex items-center gap-2 z-0 -mt-6">
        <input  onChange={(event) => setNewTasks(event.target.value)} value={Newtasks}
        className="flex-1  border-[#0D0D0D]
        outline-none rounded-[8px] text-[16px] bg-[#262626] p-[16px] placeholder:text[#808080]"  
        
           type="text"
           placeholder="Adicione uma nova tarefa" 
           />

            <button
            type="submit"
            disabled={!Newtasks.trim()}
            className="bg-[#1E6F9F]  flex  items-center gap-2
             rounded-[9px] p-[16px] text-[14px] 
            font-bold text-white">
              criar
              <img src={Plus} alt="Plus" />
            </button>
      </form>
      {/* tarefas criadas e concluidas  */}
      <div className="max-w-[736px] mx-auto mt-[64px] flex justify-between intems-itens-center">
        <p className="text-[#4EA8DE] text-[14px] font-bold flex items-center gap-2">
          tarefas criadas 
          <span className="bg-[#333333] D9D9D9] text-[12px]  px-[8px]  py-[2px] rounded-full">0</span>
        </p>
        <p  className="text-[#8284FA] text-[14px] font-bold flex items-center gap-2">
          concluídas 
          <span className="bg-[#333333] D9D9D9] text-[12px]  px-[8px]  py-[2px] rounded-full">0</span>
        </p>
      </div>

       <div className="max-w-[736px] mx-auto mt-[24px] border-t border[#333333] opacity-25">

      </div>

    <section className="max-w-[736px] mx-auto flex items-center  mt-[60px]" >

      

    {tasks.length === 0 ? (
      <div  
        className="flex flex-col items-center justify-center  w-[736px] 
        h-[287px] rounded-[8px]  p-4  text-white">
        <img src={Clipboard} alt="Clipboard" className="pb-[64px]" />

      
 

        <p className="text-center text-base  text-[#808080]   font-normal" >
          Você ainda não tem tarefas cadastradas

          </p> 
        

          <p className="text-center text-base text-[#808080]   pb-[16px] font-normal">
            Crie tarefas e organize seus itens a fazer
          </p>
      </div>
    ) : (
      
      <div className="flex flex-col gap-3  w-[736px] h-[72px] text-[#ffffff] ">
          

        {tasks.map((task) =>(
          <article      key={task.id}
           className=" flex items-center justify-between    bg-[#262626]  border border-[#333333] rounded-lg p-4 ">

           <div className=" flex items-center gap-[12px]">
       {/* <input className=" w-5"
           type="checkbox" 
           checked={task.completed}
           onChange={() => handleToggleTask(task.id)}
           /> */}

           <button type="button"
           onClick={() => handleToggleTask(task.id)}
           aria-label={
            task.completed

            ? "Marcar como como pendente"
           : "Marcar como não concluída"
          }
           title={
            task.completed
            ? "Reabrir tarefa"
           : "Concluir tarefa"
           }

           className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
            task.completed 
            ? "bg-[#5E60CE] border-[#5E60CE]" 
            : "border-[#4EA8DE]"}`}
           
           >
            {task.completed && (
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6667 1L4.00004 7L1.33337 4.27273" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
           </button>
            <p className={`flex-1 min-w-0 text-[14px] break-words ${
              task.completed ? "line-through text-[#808080]" : "text-[#ffffff]"
            }`}>
              {task.title}
            </p>

           </div>
        <img src={Trash} alt="" />
          </article>
        )
      )}
      </div>
    )}


      </section>  

    </main>
  );
}
