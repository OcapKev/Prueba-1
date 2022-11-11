import React from "react";

const Sidebar2 = () => {
  return <div>
    <h1 className="mt-4">
        OctoCat
    </h1>

    <p className="mt-2">
        @ocapkev
    </p>

    <p className="mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit hic quisquam doloribus dolores maxime magni laborum, tempore blanditiis quidem totam ad excepturi beatae non, modi, ab culpa eius sint numquam?    
    </p>

    <div className="mt-4 flex bg-slate-200 p-2 rounded-2xl justify-center">
        <div className="ml-8">
            <p>Repositorios</p>
            <p>8</p>
        </div>

        <div className="ml-8">
            <p>Seguidores</p>
            <p>7486</p>
        </div>

        <div className="ml-8">
            <p>Me Gusta</p>
            <p>9</p>
        </div>

    </div>
  </div>;
};

export default Sidebar2;
