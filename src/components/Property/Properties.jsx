import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard';
import './Property.css'
import { fetchProperties } from '../../data/PropertyData';

const Properties = () => {

    const [properties, setProperties] = useState([]);

    const getAllProperties = () => {
        const properties = fetchProperties();
        setProperties(properties);
    }


    useEffect(() => {
        getAllProperties();
    }, [])



    return (
        <div className="properties__homapage">
            <div className='properties__cards__container'>
                {properties?.map((property) => (
                    <PropertyCard property={property} />
                ))}
            </div>
        </div >
    )
}

export default Properties