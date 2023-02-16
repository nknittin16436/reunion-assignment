import React from 'react';
import FilterProperty from './Property/FilterProperty';
import Properties from './Property/Properties';
import { Typography } from 'antd';
const { Title } = Typography;
function HomePage() {
    return (
        <div>
            <Title style={{ textAlign: 'center' }}>Welcome to Property Filtering!</Title>
            <FilterProperty />
            <Properties />
        </div>
    );
}

export default HomePage;