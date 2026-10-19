 import Rocket from "../assets/rocket.svg";
export default function Home() {
  return (
    <main className="text-[#808080]">
       <header className="bg-[#0d0d0d] flex items-center justify-center pt-[72px] pb-[80px]">
        <div className="flex  items-center gap-[12px]">
          <div>
            <img src={Rocket} alt="Rocket" />
          </div>
         <h1 className="text-[40px] font-black">
          <span>to</span>
          <span>do</span>
         </h1>
        </div>
      </header>
    </main>
  );
}
