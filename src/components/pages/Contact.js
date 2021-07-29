import React from 'react'
import '../stylesheet/Contact.css'
import * as ioIcon from "react-icons/io5";

function Contact() {
    return (
        <>
        <div className="contact-page">
            <div className="contact-content">
           
            <h1 className="page-title contact-header-title">Job Interested</h1>
                <ul>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Web Development</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Font-End Development</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Mobile Developmemt</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Web Design</li>
                    <li className="interested-list"> <ioIcon.IoCheckmarkSharp/> Graphic Design</li>

                </ul>
            </div>
           
            <div className="contact-content">
                    <img className="stamp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9J8RyyCES4TyaNx6AkmdvKVxw8CcxXmzgqswcT1B3yuMBt4eo-Q9le-A-vWlvACvAQ&usqp=CAU"></img>                
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
