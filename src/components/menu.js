import React, { useState } from 'react'
import * as FaIcon from 'react-icons/fa';
import * as ioIcon from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MenuData } from './menuData';

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
                            <ioIcon.IoClose />
                        </Link>
                    </li>
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
            
        </div>
    )


}

export default Menu;
