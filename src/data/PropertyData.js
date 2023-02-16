const PropertyData = [
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://i2.au.reastatic.net/800x600/27424afc13a71dd876e9d6b27eb6496c9a636cdfcc95502e39dc49aa627ec815/image.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home-770x433.jpg?impolicy=website&width=770&height=431",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2023/01/tisbury-2.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://wp-tid.zillowstatic.com/25/real-estate-comps-91b8c8.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://mediacdn.99acres.com/media1/18975/2/379502636M-1661946378960.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://media.onthemarket.com/properties/12121400/1425266745/image-0-480x320.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://www.pmg-goa.com/images/property/1613039889_img_3740.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
    {
        name: "Ganpati Enclave",
        address: "gurgaon",
        imageUrl: "https://ap.rdcpix.com/a0fd81e5f3fa2e068e6b11192b722c38l-m2993741320od-w480_h360_x2.jpg",
        price: 5000,
        propertyType: "house",
        dateAvailable: ""
    },
]


export const fetchProperties = (filterData) => {
    const filteredProperties = PropertyData;
    if (filterData.location) {
        filteredProperties = filteredProperties.filter(property => property.location.toLowerCase().includes(filterData.location.toLowerCase()));
    }
    return filteredProperties;
}