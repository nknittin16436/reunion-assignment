import { Button, Typography } from 'antd';
import React, { Fragment } from 'react'
import Properties from './Property/Properties'
import '../components/Property/Property.css'
const { Title, Text } = Typography;


const Homepage = () => {
    return (
        <Fragment>
            <div className='header'>
                <Title style={{ textAlign: 'center' }} className="title__heading">Welcome to Property Filtering!</Title>
            </div>
            <Properties />
            <div className='footer'>
                <Text
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => window.open('https://nandkumar.me', '_blank', 'noreferrer')}
                    className="title__heading"
                >
                    Made By Nand Kumar
                </Text>
            </div>
        </Fragment >
    )
}

export default Homepage