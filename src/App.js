import { useState } from "react";
import DisplayData from "./Components/DisplayData";

function App() {

  const [name,setname]=useState("Enter City Name");
  const [value,setValue]=useState(false);

  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen w-full p-4 xl:px-64 xl:py-20 2xl:px-80 2xl:py-36">
        <div className="bg-violet-100/50 border-2 border-violet-900 rounded-2xl shadow-2xl grid grid-cols-3 min-h-full min-w-full gap-0 md:gap-3 gap-y-0">
          <div className="col-span-2 flex justify-center items-center h-36 px-3 md:px-0">
          <input className="w-full md:w-9/12 bg-transparent border-b-2 border-violet-900 py-1 px-2 focus:outline-0 text-3xl transition-all text-violet-900 font-bold"  type="text" value={name} onChange={(e)=>{setname(e.target.value);setValue(false)}} />
          </div>
          <div className="col-span-1 h-36 flex justify-center items-center px-3 md:px-0">
          <button className="border-2 border-violet-900 text-violet-900 w-full md:w-9/12 lg:w-7/12 py-1 rounded-xl shadow-xl text-lg transition-all hover:text-violet-100 hover:bg-violet-800 font-bold px-2" onClick={()=>{setValue(true)}}>Search</button>
          </div>
          <div className="col-span-3 text-center md:h-64">
          {value && <DisplayData cityName={name} />}
        </div>
        </div>
      </div>
    </div>
  );
}


export default App;
