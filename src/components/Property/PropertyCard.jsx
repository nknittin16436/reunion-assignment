import React from "react";
import "antd/dist/antd";
import { Card, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;

const PropertyCard = ({ property }) => {


    return (
        <div className="property__card">

            <Card
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
                            <Text>{`Location : ${property.location}`}</Text><br />
                            <Text>{`Rent : INR ${property.price} /month`}</Text><br />
                            <Text>{`Type : ${property.propertyType}`}</Text><br />
                            <Text>{`Available from : ${property.dateAvailable}`}</Text>
                        </div>
                    }
                />
            </Card >
        </div>
    )
};

export default PropertyCard;
