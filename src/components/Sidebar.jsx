import React from "react";
import { RiMapPin2Line, RiTwitterLine, RiCommunityLine, RiGithubFill } from "react-icons/ri";


const Sidebar = () => {
  return <div className="w-80 h-full text-gray-400">

    {/* Contenedor  */}

    <div className="bg-[#362C29] rounded-xl p-4 mb-6">

        {/* Imagen */}
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" 
        className="w-full rounded-2xl"/>

    </div>

    {/* Redes Sociales */}

    <ul className="flex items-center justify-between">
        <li>
            <a href="https://www.google.com.ar/maps/place/Posadas,+Misiones/@-27.3962288,-55.9595352,13z/data=!3m1!4b1!4m5!3m4!1s0x9457be7f080496c3:0xccbff374623e7b9a!8m2!3d-27.3621374!4d-55.9008746" 
            
            target="_blank"
            className="hover:text-[#E58D27] transition-colors text-2xl">
            <RiMapPin2Line/>
            </a>
        </li>
    
        <li>
            <a href="" 
            target="_blank"
            className="hover:text-[#E58D27] transition-colors text-2xl">
            <RiTwitterLine/>
            </a>
        </li>
    
        <li>
            <a href="https://github.com/OcapKev" 
            target="_blank"
            className="hover:text-[#E58D27] transition-colorstext-2xl">
            <RiGithubFill/>
            </a>
        </li>
    
        <li>
            <a href="" 
            target="_blank"
            className="hover:text-[#E58D27] transition-colors text-2xl">
            <RiCommunityLine/>
            </a>
        </li>
    </ul>

  </div>;
};


export default Sidebar;



