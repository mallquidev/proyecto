import React from 'react';
import Menu from '../components/Menu';

function handleSearch(event) {
    const searchValue = event.target.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
        const codigoCell = row.querySelector("td:nth-child(2)");
        const codigoText = codigoCell.textContent.toLowerCase();

        if (codigoText.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function Home() {
    return (
        <div className="flex flex-col lg:flex-row">
            <Menu />
            <div className="flex-1 mt-5 p-5 lg:ml-5">

                <div className="fixed top-0 left-0 w-full flex justify-between items-center border border-gray-500 h-14 bg-white px-4 lg:px-8">
                    <h2 className="text-sm lg:text-base">MODULO DE GESTION DE MEMORIA DESCRIPTIVA LST 4</h2>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="" className="text-xs lg:text-base">Ingrese la foto JEAN MARTIN</label>
                        <select name="" id="" className="text-xs lg:text-base border border-gray-400 rounded px-2 py-1">
                            <option value="">Configuracion</option>
                            <option value="">Salir</option>
                        </select>
                    </div>
                </div>

                <div className='mt-20 lg:mt-16'>
                    <p className="text-sm lg:text-base">Listado de precios</p>
                    <p className='text-green-700 text-base lg:text-xl'>Filtros de Búsqueda de Predios</p>

                    <div className="space-y-4">
        
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label>Proyecto</label>
                                <select name="" id="" className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700'>
                                    <option value="">Proyecto 1</option>
                                    <option value="">Proyecto 2</option>
                                    <option value="">Proyecto 3</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Código de Precio</label>
                                <input
                                    type="text"
                                    placeholder="Codigo de precio"
                                    className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700"
                                    id="searchInput"
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>

                        <div className='flex justify-end mt-4 space-x-2'>
                            <button className='border border-black text-sm px-2 py-1 rounded'>Limpiar Foro</button>
                            <button className='bg-blue-500 text-white text-sm px-2 py-1 rounded'>Aplicar Filtro</button>
                        </div>

                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-green-700 text-lg'>Resultados de Búsqueda de Precios</p>
                            <div className="space-x-2">
                                <button className='border border-black text-sm px-2 py-1 rounded'>Descargar Exel</button>
                                <button className='border bg-green-600 text-white text-sm px-2 py-1 rounded'>Agregar Precio Individualizado</button>
                            </div>
                        </div>

                        <div className="overflow-x-auto mt-5">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100 text-left text-sm lg:text-base">
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">ID</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">CODIGO</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">PROYECTO</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">TRAMO</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">TIPO DE PREDIO</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">FECHA DE CREACIÓN</th>
                                        <th className="px-3 py-2 border border-gray-300 text-gray-700">ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-300 text-sm lg:text-base">
                                        <td className="px-4 py-2 border border-gray-300">1</td>
                                        <td className="px-4 py-2 border border-gray-300">1993</td>
                                        <td className="px-4 py-2 border border-gray-300">PROYECTO: "LONGITUDINAL DE LA SIERRA TRAMO 4"</td>
                                        <td className="px-4 py-2 border border-gray-300">TRAMO 5</td>
                                        <td className="px-4 py-2 border border-gray-300">URBANO</td>
                                        <td className="px-4 py-2 border border-gray-300">2024-09-27 20:48:51</td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            <button className="border border-black text-black text-sm px-2 py-1 rounded">Editar</button>
                                            <button className="border border-black text-black text-sm px-2 py-1 rounded">Eliminar</button>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 text-sm lg:text-base">
                                        <td className="px-4 py-2 border border-gray-300">2</td>
                                        <td className="px-4 py-2 border border-gray-300">1992</td>
                                        <td className="px-4 py-2 border border-gray-300">PROYECTO: "LONGITUDINAL DE LA SIERRA"</td>
                                        <td className="px-4 py-2 border border-gray-300">TRAMO 4</td>
                                        <td className="px-4 py-2 border border-gray-300">RURAL</td>
                                        <td className="px-4 py-2 border border-gray-300">2024-09-25 20:11:33</td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            <button className="border border-black text-black text-sm px-2 py-1 rounded">Editar</button>
                                            <button className="border border-black text-black text-sm px-2 py-1 rounded">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
