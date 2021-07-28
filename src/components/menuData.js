import React from 'react'
import * as FaIcon from 'react-icons/fa';
import * as ioIcon from "react-icons/io5";
import * as BsIcon from "react-icons/bs";
import * as AiIcon from "react-icons/ai";

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcon.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcon.BsFillPersonFill />,
        cName: 'nav-text'
    },
    {
        title: 'Project',
        path: '/project',
        icon: <ioIcon.IoCodeWorking />,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaIcon.FaTools />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Resume',
    //     path: '/resume',
    //     icon: <FaIcon.FaFileAlt />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcon.FaPhoneAlt />,
        cName: 'nav-text'
    }
]