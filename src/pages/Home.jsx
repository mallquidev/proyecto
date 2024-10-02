import React from 'react';
import Menu from '../components/Menu';

function Home() {
    return (
        <div className="flex">
            <div className="flex-1 mt-16 ml-16 md:ml-48 p-5">

                <div className='fixed top-0 left-0 w-full flex justify-around items-center border border-gray-500 h-14 bg-white'>
                    <h2>MODULO DE GESTION DE MEMORIA DESCRIPTIVA LST 4</h2>
                    <div>
                        <label htmlFor="">Ingrese la foto JEAN MARTIN</label>
                        <select name="" id="">
                            <option value="">Configuracion</option>
                            <option value="">Salir</option>
                        </select>
                    </div>
                </div>

                <div className='mt-16 h-full'>
                    <p>Listado de precios</p>
                    <p className='text-green-700 text-xl'>Filtros de Búsqueda de Predios</p>
                    <div className='border-gray-400'>
                        <div className='flex justify-around items-center'>
                            <div className='flex justify-between items-center w-1/2'>
                                <label>Proyecto</label>
                                <select name="" id="" className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700'>
                                    <option value="">Proyecto 1</option>
                                    <option value="">Proyecto 2</option>
                                    <option value="">Proyecto 3</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Código de Precio</label>
                                <input type="text" placeholder='Codigo de precio' className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-700' />
                            </div>
                        </div>


                        <div className='flex justify-end mt-4'>
                            <button className='border border-black text-sm px-2 py-1 mr-2 rounded'>Limpiar Foro</button>
                            <button className='bg-blue-500 text-white text-sm px-2 py-1 rounded'>Aplicar Filtro</button>
                        </div>
                        <div className='flex h-full justify-between mt-5'>
                            <p className='text-green-700 text-lg'>Resultados de Búsqueda de Precios</p>
                            <div>
                                <button className='border border-black text-sm px-2 py-1 mr-2 rounded'>Descargar Exel</button>
                                <button className='border bg-green-600 text-white text-sm px-2 py-1 mr-2 rounded'>Agregar Precio Individualizado</button>

                            </div>

                        </div>

                        <div className="overflow-x-auto mt-5">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
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
                                    <tr className="border-b border-gray-300">
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
                                    <tr className="border-b border-gray-300">
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
                <Menu />
            </div>
        </div>
    );
}

export default Home;
