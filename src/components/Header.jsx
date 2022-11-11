import React from "react";
import { RiShoppingCartFill, RiHeart2Line } from "react-icons/ri";


const Header = () => {
  return <header className="h-[10vh] text-gray-300 p-4 flex items-center justify-between bg-[#181A20] z-40">

    {/* Menu de inicio */}

    <ul className="flex items-center gap-6">
        <li>
            <a href="#" className="hover:text-[#E58D27] transition-colors">Inicio</a>
        </li>

        <li>
            <a href="#" className="hover:text-[#E58D27] transition-colors">Quienes Somos</a>
        </li>

        <li>
            <a href="https://github.com/OcapKev" 
                className="text-[#E58D27] transition-colors" 
                target="_blank">GitHub</a>
        </li>

        <li>
            <a href="#" className="hover:text-[#E58D27] transition-colors">Consultas</a>
        </li>
    </ul>

    {/* Menudo de Usuario */}

    <ul className="flex items-center gap-6 text-xl">
        <li>
            <button className="hover:text-[#E58D27] transition-colors"> <RiShoppingCartFill /> </button>
        </li>

        <li>
            <button className="hover:text-[#E58D27] transition-colors"> <RiHeart2Line /> </button>
        </li>

        <li>
            <button className="hover:text-[#E58D27] transition-colors"> 
            <img src="https://images2.alphacoders.com/932/932961.jpg" 
            className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]" /> </button>
        </li>

    </ul>
  </header>;
};

export default Header;