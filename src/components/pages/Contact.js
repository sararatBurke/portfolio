import React from 'react'

function Contact() {
    return (
        <>
        <div className="contact-page">
            <div className="contact-content">
           
            <h1 className="page-title contact-header-title">Job Interested</h1>
                <ul>
                    <li> <input type="checkbox" checked="checked" ></input> Web Development</li>
                    <li> <input type="checkbox" checked="checked" ></input> Font-End Development</li>
                    <li> <input type="checkbox" checked="checked" ></input> Mobile Developmemt</li>
                    <li> <input type="checkbox" checked="checked" ></input> Web Design</li>
                    <li> <input type="checkbox" checked="checked" ></input> Graphic Design</li>

                </ul>
            </div>
           
            <div className="contact-content">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9J8RyyCES4TyaNx6AkmdvKVxw8CcxXmzgqswcT1B3yuMBt4eo-Q9le-A-vWlvACvAQ&usqp=CAU"></img>                
                <p>Sararat Burke</p>
                <p>860.3252946</p>
                <p>baas.burke@gmail.com</p>
                <p>435 E Broadway, Haverhille, MA 01830</p>
                <p><a href="https://www.linkedin.com/in/sararat-burke-869497b9/">LinkIned</a></p>
                <p><a href="https://github.com/sararatBurke">GitHub</a></p>

            </div>
        </div>
        </>
    )
}

export default Contact
