import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
import { RiSearchLine } from "react-icons/ri";


function App() {

  return <div className="min-h-screen text-gray-400">
            <Header />
              <main className="h-[90vh] flex gap-8 p-8">
            <Sidebar/>
                <div className="flex-1 h-full relative"> 

                {/* Barra de Buscador */}
                  <div>
                    <RiSearchLine className="absolute left-3 top-3 text-gray-400"/>
                    <input className="bg-[#181A20] py-2 pl-10 pr-10 rounded-2xl" type="text" placeholder="Usuario de GitHub"/>

                  </div>

                  <div>
                    <Sidebar2/>
                  </div>

                </div>
                  
              </main>
        </div>
}

export default App
