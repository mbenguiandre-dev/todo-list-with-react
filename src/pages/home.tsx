import Rocket from "../assets/rocket.svg";
import Plus from "../assets/plus.svg";
import Clipboard from "../assets/Clipboard.svg";
 
export default function Home() {
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
      <section className="max-w-[736px] mx-auto flex items-center gap-2">
        <input className="flex-1  border-[#0D0D0D]
        outline-none rounded-[8px] text-[16px] bg-[#262626] p-[16px] placeholder:text[#808080]"  
        
           type="text"
           placeholder="Adicione uma nova tarefa"
           />

            <button
            className="bg-[#1E6F9F]  flex  items-center gap-2
             rounded-[9px] p-[16px] text-[14px] 
            font-bold text-white">
              criar
              <img src={Plus} alt="Plus" />
            </button>
      </section>
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

      <div  className="flex flex-col items-center justify-center  w-[736px] 
      h-[287px] rounded-[8px]  p-4  text-white">
     <img src={Clipboard} alt="Clipboard" className="pb-[64px]" />

      
 

   <p className="text-center text-base  text-[#808080]   font-normal" >
    Você ainda não tem tarefas cadastradas

    </p> 
  

   <p className="text-center text-base text-[#808080]   pb-[16px] font-normal">
    Crie tarefas e organize seus itens a fazer
  </p>
  </div>


      </section>  


    

    </main>
  );
}
