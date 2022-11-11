import React from "react";
import { RiMapPin2Line, RiTwitterLine, RiCommunityLine, RiGithubFill } from "react-icons/ri";

const Sidebar2 = () => {
  return <div>
    <h1 className="mt-4">
        OctoCat
    </h1>

    <p className="mt-2">
        @ocapkev
    </p>

    <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores reiciendis ducimus accusamus eligendi nesciunt sint obcaecati! Iure eaque illo quas, maiores veritatis corporis illum similique tempora aspernatur, consequatur necessitatibus vitae.
    </p>

    <div className="mt-4 flex bg-slate-200 p-2 rounded-2xl justify-center">
        <div className="ml-8">
            <p>Repositorios</p>
            <p className="ml-10">8</p>
        </div>

        <div className="ml-8">
            <p>Seguidores</p>
            <p className="ml-5">7486</p>
        </div>

        <div className="ml-8">
            <p>Me Gusta</p>
            <p className="ml-7">9</p>
        </div>
    </div>
      <div className="mt-4 ml-2">
        <ul>
        <li className="flex">
            <a href="https://www.google.com.ar/maps/place/Posadas,+Misiones/@-27.3962288,-55.9595352,13z/data=!3m1!4b1!4m5!3m4!1s0x9457be7f080496c3:0xccbff374623e7b9a!8m2!3d-27.3621374!4d-55.9008746" 
            target="_blank"
            className="hover:text-[#E58D27] transition-colors text-2xl">
            <RiMapPin2Line />
            </a>
            <p className="ml-2">Posadas Misiones</p>
        </li>
        </ul>

      <div>
      <ul className="flex mt-2">
        <li className="flex">
            <a href="https://github.com/OcapKev" 
            target="_blank"
            className="hover:text-[#E58D27] transition-colors text-2xl">
            <RiGithubFill/>
            </a>
            <p className="ml-2">OcapKev</p>
        </li>
        </ul>
      </div>
      </div>
  </div>;
};

export default Sidebar2;


