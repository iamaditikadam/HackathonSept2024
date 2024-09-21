import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesome component
import { faCirclePlus, faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use

const NavBar: React.FC = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#295F98] p-2 z-10 h-14 shadow-lg"> {/* Reduced height to h-14 */}
            <div className="flex justify-around items-center h-full">
                {/* Assignments Icon */}
                <a className="hover:bg-[#1E4B7D] rounded p-2" href="#">
                    <FontAwesomeIcon icon={faClipboardList} size="1x" className="text-[#EAE4DD]" />
                </a>

                {/* Add Task Icon */}
                <a className="hover:bg-[#1E4B7D] rounded-full p-2 bg-[#1E4B7D] transform scale-110" href="#"> {/* Reduced padding and scale */}
                    <FontAwesomeIcon icon={faCirclePlus} size="2x" className="text-[#EAE4DD]" /> {/* Reduced size of the plus icon */}
                </a>

                {/* Calendar Icon */}
                <a className="hover:bg-[#1E4B7D] rounded p-2" href="#">
                    <FontAwesomeIcon icon={faCalendarAlt} size="1x" className="text-[#EAE4DD]" />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
