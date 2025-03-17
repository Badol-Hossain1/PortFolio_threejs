import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { navLinks } from './data/data'

const Links = () => {
    return (
        <ul className="text-white flex flex-col sm:flex-row gap-5 ">
            {navLinks.map(({ id, name, href }) => (
                <li className='cursor-pointer' key={id}>
                    <a href={href}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prev) => !prev)
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className="justify-between flex items-center py-5 mx-auto ">
                    <a
                        href="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Badol Hossain
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-white sm:hidden flex text-nutral-400  w-6 h-6 cursor-pointer"
                    >
                        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                    <nav className="sm:flex  hidden ">
                        <Links />
                    </nav>
                </div>
            </div>

            <div
                className={`absolute left-0 right-0 bg-gray-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block
 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <nav className="p-5">
                    <Links />
                </nav>
            </div>
        </header>
    )
}

export default Navbar
