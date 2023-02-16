import React, { useState } from "react";
import "antd/dist/antd";
import { Card, Button, Space, Input, Rate, Typography, Select } from "antd";
const { Meta } = Card;
const { Text } = Typography;

const PropertyCard = ({ property }) => {


    return (
        <div className="property__card">

            <Card
                style={{
                    width: 350,
                }}
                cover={
                    <img
                        className="property__image"
                        alt={property.name}
                        src={property.imageUrl}
                    />
                }
            >
                <Meta
                    title={property.name}
                    description={
                        <div>
                            <div>
                                <p>{`Location : ${property.address}`}</p>
                                <p>{`Rent : ${property.price} /month`}</p>
                            </div>


                        </div>
                    }
                />
            </Card >
        </div>
    )
};

export default PropertyCard;
