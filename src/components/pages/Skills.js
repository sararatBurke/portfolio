import React from 'react'
import SkillData from './skillData'
import ToolData from './toolData'

import '../stylesheet/Skill.css'

function Skills() {
    
    return (
        <div className='skill-page'>
            <h1 className='page-title'>Skills</h1>
            <h2 className='skill-sub-title'>Programming: </h2>
                {SkillData.map((item, index) => {
                return(
                    <li key={index} className={item.cSkill}>
                        <img className='skill-img' src={item.img}/><br/>
                        {item.subject}
                    </li>
                )
            })}
            <h2 className='skill-sub-title'>Tools: </h2>
                {ToolData.map((item, index) => {
                    return(
                        <li key={index} className={item.cTool}>
                            <img className='tool-img' src={item.img}/><br/>
                            {item.title}
                        </li>
                    )
                })}
            
        </div>
    )
}

export default Skills
