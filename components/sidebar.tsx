import Link from 'next/link';
import { useTheme } from 'next-themes';

const Sidebar = ({ isOpen, onClose }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`lg:hidden fixed top-0 left-0 bottom-0 z-50 w-64 overflow-y-auto bg-white transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <nav className="p-4">
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={onClose} className="block py-2 text-gray-700 hover:bg-gray-100">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/databaze-hlasek">
                            <a onClick={onClose} className="block py-2 text-gray-700 hover:bg-gray-100">
                                Databaze Hlasek
                            </a>
                        </Link>
                    </li>
                    {/* Add other navigation links here */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;