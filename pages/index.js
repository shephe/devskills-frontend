import React from 'react'
import Card from '../components/Card/Card'
import fetch from 'isomorphic-unfetch'
import Nav from '../components/NavBar/Nav'
// import Header from '../components/Header/Header'


export default function Index (props) {
    return (
        <div>
            <Nav/>
            
            
            <Card>
                Welcome to My Dev Skills!
            </Card>
        </div>
    )
}

