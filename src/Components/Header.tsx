import React, { useState } from 'react';

const Header: React.FC = () => {
    // State to toggle menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className="flex justify-between items-center px-4 py-4 relative">
                {/* Hamburger button on the left */}
                <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Centered "Hello Aditi!" */}
                <h1 className="text-center text-blue-500 text-lg sm:text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
                    Hello Aditi!
                </h1>

                {/* Empty placeholder to balance the layout */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Sliding Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4">
                    <button onClick={toggleMenu} className="mb-4">
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <ul>
                        <li className="p-2 border-b">Menu Item 1</li>
                        <li className="p-2 border-b">Menu Item 2</li>
                        <li className="p-2">Menu Item 3</li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default Header;
