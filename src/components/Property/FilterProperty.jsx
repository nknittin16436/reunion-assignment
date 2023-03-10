import { Button, DatePicker, Input, Select, Space } from 'antd'
import moment from 'moment/moment';
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons';

const FilterProperty = ({ setFilterData, setPage }) => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(null);
    const [propertyType, setPropertyType] = useState("");
    const handleDateChange = (date, dateString) => {
        if (dateString) {
            setDate(dateString);
        }
        else {
            setDate("");
        }
    }
    const handlePropertyTypeChange = (propertyType) => {
        if (propertyType) {
            setPropertyType(propertyType);
        }
        else {
            setPropertyType("");
        }
    }
    const handlePriceRangeChange = (value) => {
        if (value) {
            setPrice(JSON.parse(value))
        }
        else {
            setPrice({})
        }
    }
    const handleLocationChange = (event) => {
        if (event.target.value) {
            setLocation(event.target.value.trim())
        }
        else {
            setLocation("")
        }
    }

    const handleFilterSearch = () => {
        setPage(1);
        setFilterData({ location, date, price, propertyType });
    }
    return (
        <div className='filter_property_container'>
            <div className="filter__item">
                <Input
                    style={{ width: 160 }}
                    allowClear
                    placeholder="Enter Location"
                    onChange={(e) => handleLocationChange(e)}
                />
            </div>
            <div className="filter__item">
                <DatePicker
                    style={{ width: 160 }}
                    onChange={handleDateChange}
                    disabledDate={(current) => {
                        return moment().add(-1, "days") >= current;
                    }}
                />
            </div>


            <div className="filter__item">
                <Space wrap>
                    <Select
                        defaultValue={null}
                        placeholder="Price Range"
                        style={{ width: 160 }}
                        allowClear
                        onChange={handlePriceRangeChange}
                        options={[
                            { value: '{"low":1000,"high":2000}', label: "1000--2000" },
                            { value: '{"low":2000,"high":4000}', label: "2000--4000" },
                            { value: '{"low":4000,"high":8000}', label: "4000--8000" },
                            { value: '{"low":8000,"high":10000}', label: "8000--10000" },
                            { value: '{"low":10000,"high":1000000}', label: ">10000" },
                        ]}
                    />
                </Space>
            </div>
            <div className="filter__item">
                <Space wrap>
                    <Select
                        defaultValue={null}
                        placeholder="Type of Property"
                        style={{ width: 160 }}
                        allowClear
                        onChange={handlePropertyTypeChange}
                        options={[
                            { value: "house", label: "House" },
                            { value: "flat", label: "Flat" },
                            { value: "villa", label: "Villa" },
                            { value: "plot", label: "Plot" }
                        ]}
                    />
                </Space>
            </div>
            <div className="filter__item">
                <Button type="primary" icon={<SearchOutlined />} size={25} onClick={handleFilterSearch}>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default FilterProperty