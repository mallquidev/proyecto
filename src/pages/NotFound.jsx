import React from 'react'

function NotFound() {
  return (
    <div className="h-screen grid place-items-center text-center px-8">
      <div>
        <div className="w-20 h-20 bg-gray-400 mx-auto"></div>
        <h1 className="mt-10 text-3xl leading-snug md:text-4xl text-blue-gray-900">
          Error 404 <br /> Parece que algo salió mal.
        </h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          No te preocupes, nuestro equipo ya está trabajando en ello. Por favor, intenta actualizar la página o vuelve más tarde.
        </p>
        <button className="bg-gray-300 text-black w-full px-4 py-2 md:w-[8rem] rounded">
          Volver al inicio
        </button>
      </div>
    </div>
  )
}

export default NotFound