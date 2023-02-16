import React, { useState } from 'react';
import FilterProperty from './Property/FilterProperty';
import Properties from './Property/Properties';
import { Typography } from 'antd';
const { Title } = Typography;
function HomePage() {


    const [filterData, setFilterData] = useState({});
    return (
        <div>
            <Title style={{ textAlign: 'center' }}>Welcome to Property Filtering!</Title>
            <FilterProperty setFilterData={setFilterData} />
            <Properties filterData={filterData} />
        </div>
    );
}

export default HomePage;