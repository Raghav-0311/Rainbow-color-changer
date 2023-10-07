import { useState } from "react"



function App() {
  const [color, setColor] = useState('#475569');
  
  
  

  return (
    <>
      <div className="flex flex-col items-center justify-between w-screen h-screen pt-16 pb-16 bg-white">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-violet-600">R</span>
            <span className="text-indigo-600">a</span>
            <span className="text-blue-600">i</span>
            <span className="text-green-600">n</span>
            <span className="text-yellow-600">b</span>
            <span className="text-orange-600">o</span>
            <span className="text-red-600">w</span>
            &nbsp;
            <span className="text-slate-600">C</span>
            <span className="text-slate-500">o</span>
            <span className="text-slate-400">l</span>
            <span className="text-slate-500">o</span>
            <span className="text-slate-600">r</span>
            &nbsp;
            <span className="text-slate-600">C</span>
            <span className="text-slate-500">h</span>
            <span className="text-slate-400">a</span>
            <span className="text-slate-300">n</span>
            <span className="text-slate-400">g</span>
            <span className="text-slate-500">e</span>
            <span className="text-slate-600">r</span>
          </h1>
          <div className="w-40 h-40 mt-4 mb-12 rounded-full animate-pulse shadow-xl" style={{backgroundColor: color}}></div>
          <div className="flex items-center justify-between mt-8">
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_6s_ease-in-out_infinite] opacity-30 shadow-xl" style={{backgroundColor: color}}></div>
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_5s_ease-in-out_infinite] opacity-40 shadow-xl" style={{backgroundColor: color}}></div>
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_4s_ease-in-out_infinite] opacity-50 shadow-xl" style={{backgroundColor: color}}></div>
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_3s_ease-in-out_infinite] opacity-60 shadow-xl" style={{backgroundColor: color}}></div>
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_2s_ease-in-out_infinite] opacity-70 shadow-xl" style={{backgroundColor: color}}></div>
            <div className="w-20 h-20 mt-4 mb-4 rounded-full ml-3 mr-3 animate-[bounce_1s_ease-in-out_infinite] opacity-80 shadow-xl" style={{backgroundColor: color}}></div>
          </div>
        </div>
        <div className="w-100">
          <div className="flex items-center justify-between bg-slate-600 p-4 rounded-full shadow-xl">

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-violet-600 text-violet-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('violet')}  
            >
              Violet
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-indigo-600 text-indigo-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('indigo')}  
            >
              Indigo
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-blue-600 text-blue-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('blue')}  
            >
              Blue
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-green-600 text-green-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('green')}  
            >
              Green
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-yellow-600 text-yellow-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('yellow')}  
            >
              Yellow
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-orange-600 text-orange-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('orange')}  
            >
              Orange
            </button>

            <button 
              className="cursor-pointer pl-8 pr-8 pt-2 pb-2 ml-4 mr-4 rounded-full bg-red-600 text-red-200 text-xl font-semibold hover:shadow-lg transition-all ease-in-out"
              onClick={() => setColor('red')}  
            >
              Red
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
