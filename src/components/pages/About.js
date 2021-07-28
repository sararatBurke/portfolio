import React from 'react'
import '../stylesheet/About.css'

function About() {
    return (
        <>
        <div className="about-page">
            <div className="about-content">
                <img className="about-img" src="https://www.worldphoto.org/sites/default/files/139813_158163_0_%20%C2%A9%20Noel%20Guevara%2C%20Philippines%2C%20Commended%2C%20Open%20Competition%2C%20Portraits%2C%202017%20Sony%20World%20Photography%20Awards.jpg"></img>
            </div>
            <div className="about-content">
                <h1 className="page-title about-header-title">About</h1>
                <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </>
    )
}

export default About
