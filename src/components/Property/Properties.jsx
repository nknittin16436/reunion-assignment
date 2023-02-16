import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard';
import { Pagination } from 'antd';
import { fetchProperties } from '../../data/PropertyData';
import './Property.css'
const pageSize = 6;
const Properties = ({ filterData }) => {

    const [properties, setProperties] = useState([]);
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