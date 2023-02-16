import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard';
import { Pagination } from 'antd';
import { Typography } from 'antd';
import FilterProperty from './FilterProperty'
import { fetchProperties } from '../../data/PropertyData';
import './Property.css'
const { Title } = Typography;
const pageSize = 6;
const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [filterData, setFilterData] = useState({});
    const [page, setPage] = useState(1);
    const [totalProperties, setTotalProperties] = useState(0);

    const getAllProperties = () => {
        const { filteredProperties, totalProperties } = fetchProperties({ ...filterData, page, pageSize });
        setTotalProperties(totalProperties)
        setProperties(filteredProperties);
    }


    useEffect(() => {
        getAllProperties();
    }, [filterData, page])



    return (
        <div className="properties__homapage">
            <Title style={{ textAlign: 'center' }} className="title__heading">Welcome to Property Filtering!</Title>
            <FilterProperty setFilterData={setFilterData} setPage={setPage} />
            <div className='properties__cards__container'>
                {properties?.map((property, index) => (
                    <PropertyCard property={property} key={index} />
                ))}
            </div>
            <div className='pagination__container'>
                <Pagination current={page} total={totalProperties} pageSize={pageSize} onChange={(page) => setPage(page)} />
            </div>
        </div >
    )
}

export default Properties