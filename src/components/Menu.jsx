import React, { useState } from 'react';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            
            <div className="lg:hidden fixed top-0 left-0 z-50 p-4">
                <button onClick={toggleMenu} className="text-black">
                    &#9776; 
                </button>
            </div>

            <div className={`fixed mt-10 left-0 w-64 bg-green-700 text-white h-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
                <ul className="space-y-4 p-6">
                    <li className="text-lg">Inicio</li>
                    <li className="text-lg">Configuraciones</li>
                    <li className="text-lg">Salir</li>
                </ul>
            </div>

            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="lg:hidden fixed inset-0 bg-black opacity-50"
                ></div>
            )}
        </div>
    );
}

export default Menu;
