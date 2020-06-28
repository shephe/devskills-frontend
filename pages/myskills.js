import React from 'react'
import Card from 'components/Card/Card'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Nav from '../components/NavBar/Nav'


export default function MySkills (props) {
    const [skill, setSkill] = React.useState()

    const mySkill = props.data.objects

    const handleClick = async (key) => {

        console.log(props)
        setSkill(mySkill[key])
    }

    //Was going to use this to get the human-readable description for skill levels but moving on to final project now instead of finishing.
    // const getLevel = (number) => {
    //     switch(number){

    //     }
    // }
    
    return (
        
        <div>
            <Nav></Nav>
            {skill ? 
            <Card>
                <h1>{skill.description}</h1>
                <h2>{skill.skill_level}</h2>
            </Card>
            
            

            : <div>
                {props.data.objects.map((object, index)=> {
                    return(<button onClick={() => {handleClick(index)}} id={index} key={index}>{object.description}</button>)
                    
                })}
            </div>}
             
        </div>
    )
}

MySkills.getInitialProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/skill/skill/');
    const data = await res.json();
    return {
        data: data
    }
}