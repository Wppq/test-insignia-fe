import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-white p-4">
            <div className="flex justify-between items-center">
                <div className="block md:hidden" onClick={toggleMenu}>
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="text-lg font-bold">SocialNetwork</div>
                <div className="flex-grow hidden md:flex mx-4 items-center">
                    <div className="relative flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Find..."
                            className="p-2 rounded w-full pr-10 bg-gray-200 text-black"
                        />
                        <i className="fas fa-search absolute right-3 text-gray-400" />
                    </div>
                    <button className="ml-2 bg-white text-red-800 px-4 py-2 rounded flex items-center">
                        <i className="fas fa-arrow-up mr-2" />
                        <span>Upload</span>
                    </button>
                </div>
                <div className="flex items-center">
                    <button className="mr-2 md:hidden bg-white text-red-800 px-4 py-2 rounded flex items-center">
                        <i className="fas fa-arrow-up" />
                    </button>
                    <i className="fas fa-user bg-white p-2 rounded-full text-red-800 mr-2" />
                    <span className='md:block hidden'>Waseem Arshad</span>
                </div>
            </div>
            <div className="relative md:hidden flex items-center w-full mt-4">
                <input
                    type="text"
                    placeholder="Find..."
                    className="p-1.5 rounded w-full bg-gray-200 text-black"
                />
                <i className="fas fa-search absolute right-3 text-gray-400" />
            </div>

            {/* Menu Dropdown */}
            <div className={`mt-2 border-t-2 border-b-2 py-2 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 text-white">
                    <li className="py-1 md:py-0">Videos</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">People</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">Documents</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">Events</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">Communities</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">Favorites</li>
                    <span className="mx-3 text-white md:block hidden">/</span>
                    <li className="py-1 md:py-0">Channels</li>
                </ul>
            </div>
        </nav>
    );
}