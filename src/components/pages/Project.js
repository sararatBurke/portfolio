import React from 'react'
import '../stylesheet/Project.css'
import JsonFinal from '../img/json-final.jpg'
import Todo from '../img/todo-react.jpg'
import Art from '../img/art-port.jpg'

function Project() {
    return (
        <>
        <div className="project-page">
        <h1 className="page-title project-header-title">Project</h1>
            <div className="project-content">
                <a href="#">
                    <img className="project-img" src={JsonFinal}></img>
                </a>
                <a href="https://todoapp-w4.web.app/" target='_blank'>
                    <img className="project-img" src={Todo}></img>
                </a>
                <a href="http://bdcteach.com/cmt241/burke/xml_final/index.html" target='_blank'>
                    <img className="project-img" src={Art}></img>
                </a>
            </div>
            
        </div>
        </>
    )
}

export default Project
