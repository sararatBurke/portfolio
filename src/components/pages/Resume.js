import React from 'react';
import '../stylesheet/Resume.css';

function Resume() {
    return (
        <>
        <div className="resume-page">
            <h1 className="page-title">Resume</h1>

                <div className="left-table">
                    <table>
                       <h3 className="resume-title">Education</h3>
                        <tr>
                            <th className="date">Jan 2019 - May 2021</th>
                            <th>Bunker Hill Community College, MA | USA</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Associate of Science, Web Development | GPA 3.95</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Built a todo list (Eating Burger application) by using React.js</li></td>

                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Built a photo display application by using React-native.js</li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Used JSON, jQuery, HTML, CSS to build my portfolio by using data from API weather and google sheet.</li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Used HTML, CSS, XML, JavaScript to create my artwork portfolio</li></td>
                        </tr>

                        <tr>
                            <th className="date">Jun 2006 - Mar 2010</th>
                            <th>Naresuan University | Thailand</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Bachelor of Art, Innovative Media Design</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td >A fine arts bachelor degree with a focus on animation. 
                            Study both stop motion and digital animation techniques. 
                            Gained practical experience leveraging Premier Pro and After Effects to produce short films.
                            </td>
                        </tr>
                    
                    <h3 className="resume-title">Experience</h3>
                        <tr>
                            <th className="date">Apr 2017 - Jan 2019</th>
                            <th>Tri-Star Printing and Graphics,Somerville | Graphic designer</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Designed layout designs such as menus, posters, and business cards, using Adobe Suite.</li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Worked directly with clients to create designs and the printing process.</li></td>
                        </tr>

                        <tr>
                            <th className="date">Aug 2015 - Dec 2016</th>
                            <th>Self taught | Web Developer</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Taught myself writing HTML, CSS, and JavaScript</li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Used Git to build a website to display artist’s portfolio</li></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><li>Built interactive photo carousels without relying on 3rd party libraries or tools other than jQuery.</li></td>
                        </tr>  
                    </table>
                </div>

                <div className="right-table">
                    <table>
                        <h3 className="resume-title">Skills</h3>
                            <tr>
                                <th>Programming: </th>
                                <td>HTML5, CSS, XML, JavaScript, Ajax, JSON, Node.js, jQuery, React.js, PHP</td>
                            </tr>
                            <tr>
                                <th>Mobile: </th>
                                <td>React-Native, Expo</td>
                            </tr>
                            <tr>
                                <th>Design: </th>
                                <td>Illustrator, Indesign, Photoshop, Premiere Pro, After Effect</td>
                            </tr>
                            <tr>
                                <th>Language: </th>
                                <td>Thai, English</td>
                            </tr>
                    </table>
                </div>
        </div>
        </>
    )
}

export default Resume
