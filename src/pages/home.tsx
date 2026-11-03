
import Rocket from "../assets/rocket.svg";
import Plus from "../assets/plus.svg";
import Clipboard from "../assets/Clipboard.svg";
import { useState, type FormEvent } from "react";
import Trash from "/trash.svg";

// TIPOS DE DADOS

type MyTask = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  // ESTADOS

  const [tasks, setTasks] = useState<MyTask[]>([]);
  const [newTasks, setNewTasks] = useState("");

  // CONTADORES

  const createdTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // CRIAR TAREFAS

  function handleCreateTasks(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = newTasks.trim();

    if (!title) return;

    const task: MyTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, task]);

    setNewTasks("");
  }

  // MARCAR TAREFA COMO CONCLUÍDA

  function handleToggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // ELIMINAR TAREFA

  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <main className="text-[#808080] min-h-screen">

      {/* HEADER */}

      <header className="bg-[#0d0d0d] flex items-center justify-center pt-[72px] pb-[80px]">
        <div className="flex items-center gap-[12px]">
          <img src={Rocket} alt="Rocket" />

          <h1 className="text-[40px] font-black">
            <span className="text-[#4EA8DE]">to</span>
            <span className="text-[#5E60CE]">do</span>
          </h1>
        </div>
      </header>

      {/* FORMULÁRIO */}

      <form
        onSubmit={handleCreateTasks}
        className="max-w-[736px] w-full mx-auto px-4 flex items-center gap-2 z-0 -mt-6"
      >
        <input
          onChange={(event) => setNewTasks(event.target.value)}
          value={newTasks}
          className="flex-1 min-w-0 border border-[#0D0D0D] outline-none rounded-[8px] text-[16px] bg-[#262626] p-[16px] placeholder:text-[#808080]"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button
          type="submit"
          disabled={!newTasks.trim()}
          className="bg-[#1E6F9F] flex items-center gap-2 rounded-[9px] p-[16px] text-[14px] font-bold text-white disabled:opacity-50"
        >
          criar
          <img src={Plus} alt="Plus" />
        </button>
      </form>

      {/* CONTADORES */}

      <div className="max-w-[736px] w-full mx-auto px-4 mt-[64px] flex justify-between items-center">

        <p className="text-[#4EA8DE] text-[14px] font-bold flex items-center gap-2">
          tarefas criadas

          <span className="bg-[#333333] text-white text-[12px] px-[8px] py-[2px] rounded-full">
            {createdTasks}
          </span>
        </p>

        <p className="text-[#8284FA] text-[14px] font-bold flex items-center gap-2">
          concluídas

          <span className="bg-[#333333] text-white text-[12px] px-[8px] py-[2px] rounded-full">
            {completedTasks} de {createdTasks}
          </span>
        </p>

      </div>

      {/* DIVISOR */}

      <div className="max-w-[736px] w-full mx-auto px-4 mt-[24px]">
        <div className="border-t border-[#333333] opacity-25" />
      </div>

      {/* LISTA DE TAREFAS */}

      <section className="max-w-[736px] w-full mx-auto px-4 mt-[60px]">

        {tasks.length === 0 ? (

          // ESTADO VAZIO

          <div className="flex flex-col items-center justify-center w-full min-h-[287px] rounded-[8px] p-4 text-white">

            <img
              src={Clipboard}
              alt="Clipboard"
              className="mb-[64px]"
            />

            <p className="text-center text-base text-[#808080] font-bold">
              Você ainda não tem tarefas cadastradas
            </p>

            <p className="text-center text-base text-[#808080] pb-[16px] font-normal">
              Crie tarefas e organize seus itens a fazer
            </p>

          </div>

        ) : (

          // TAREFAS CADASTRADAS

          <div className="flex flex-col gap-3 w-full">

            {tasks.map((task) => (

              <article
                key={task.id}
                className="flex items-center justify-between gap-3 bg-[#262626] border border-[#333333] rounded-lg p-4"
              >

                <div className="flex items-center gap-[12px] min-w-0 flex-1">

                  {/* BOTÃO CONCLUIR */}

                  <button
                    type="button"
                    onClick={() => handleToggleTask(task.id)}
                    aria-label={
                      task.completed
                        ? "Marcar como pendente"
                        : "Marcar como concluída"
                    }
                    title={
                      task.completed
                        ? "Reabrir tarefa"
                        : "Concluir tarefa"
                    }
                    className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? "bg-[#5E60CE] border-[#5E60CE]"
                        : "border-[#4EA8DE]"
                    }`}
                  >

                    {task.completed && (
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6667 1L4.00004 7L1.33337 4.27273"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                  </button>

                  {/* TÍTULO DA TAREFA */}

                  <p
                    className={`min-w-0 flex-1 text-[14px] break-words ${
                      task.completed
                        ? "line-through text-[#808080]"
                        : "text-[#ffffff]"
                    }`}
                  >
                    {task.title}
                  </p>

                </div>

                {/* BOTÃO EXCLUIR */}

                <button
                  type="button"
                  onClick={() => handleDeleteTask(task.id)}
                  title="Eliminar tarefa"
                  aria-label="Eliminar tarefa"
                  className="shrink-0 p-2 rounded-md hover:bg-[#333333] transition-colors"
                >
                  <img
                    src={Trash}
                    alt=""
                    className="w-5 h-5"
                  />
                </button>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}

