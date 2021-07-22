import React, {useState} from 'react'
import * as FaIcon from 'react-icons/fa';
import * as iClose from "react-icons/io5";
import { Link } from 'react-router-dom';

function Menu() {
    const [sidebar,setSidebar] = useState(false)
    const showSidbar = () => setSidebar(!sidebar)

    return (
        <div className="navbar">
            
            <Link to='#' className='menu-bars'>
                <FaIcon.FaBars onClick={showSidbar}/>
            </Link>
            <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-item'>
                    <li className='nav-menu-toggle'>
                        <Link to='#' className='menu-bars'>
                            <iClose.IoClose />
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )


}

export default Menu;
