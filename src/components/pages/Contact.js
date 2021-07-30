import React from 'react'
import '../stylesheet/Contact.css'
import * as ioIcon from "react-icons/io5";
import Stamp from '../img/stamp.png';

function Contact() {
    return (
        <>
        <div className="contact-page">
            <div className="contact-content content-left">
           
            <h1 className="page-title contact-header-title">Job Interested</h1>
                <ul>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Web Development</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Font-End Development</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Mobile Developmemt</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Web Design</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Graphic Design</li>

                </ul>
                <button className="download-button"><a className="download" target="_blank" href="https://docs.google.com/document/d/1o21McI03d8FwW7JTNZg7UZ-12SdaLFOeWWBRYPjf-ig/edit">Download Resume</a></button>
            </div>
            <div className="contact-content vertical-line"></div>
           
            <div className="contact-content content-right">
                    <img className="stamp" src={Stamp}></img>                
                <p className="name">Sararat Burke</p>
                <p className="contact-info">435 E Broadway, <br/>Haverhille, MA 01830</p>
                <p className="contact-info">baas.burke@gmail.com</p>
                <p className="contact-info"><a className="contact-link" target="_blank" href="https://www.linkedin.com/in/sararat-burke-869497b9/">LinkIned</a></p>
                <p className="contact-info"><a className="contact-link" target="_blank" href="https://github.com/sararatBurke">GitHub</a></p>

            </div>
        </div>
        </>
    )
}

export default Contact
