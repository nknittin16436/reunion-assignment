const PropertyData = [
    {
        name: "Ganpati Enclave",
        location: "gurgaon",
        imageUrl: "https://i2.au.reastatic.net/800x600/27424afc13a71dd876e9d6b27eb6496c9a636cdfcc95502e39dc49aa627ec815/image.jpg",
        price: 1200,
        propertyType: "House",
        dateAvailable: "2023-02-22"
    },
    {
        name: "Nand Kumar Home",
        location: "Sector 4 Gurgaon",
        imageUrl: "https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg",
        price: 5500,
        propertyType: "Villa",
        dateAvailable: "2023-03-22"
    },
    {
        name: "Nittin homes",
        location: "gurgaon",
        imageUrl: "https://i2.au.reastatic.net/800x600/27424afc13a71dd876e9d6b27eb6496c9a636cdfcc95502e39dc49aa627ec815/image.jpg",
        price: 3800,
        propertyType: "House",
        dateAvailable: "2023-02-22"
    },
    {
        name: "Ganpati Enclave",
        location: "delhi",
        imageUrl: "https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home-770x433.jpg?impolicy=website&width=770&height=431",
        price: 2500,
        propertyType: "Plot",
        dateAvailable: "2023-03-30"
    },
    {
        name: "Ganpati Enclave",
        location: "rajendra park gurgaon",
        imageUrl: "https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg",
        price: 4000,
        propertyType: "House",
        dateAvailable: "2023-01-22"
    },
    {
        name: "Ganpati Enclave",
        location: "Surat vihar Noida",
        imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2023/01/tisbury-2.jpg",
        price: 8000,
        propertyType: "House",
        dateAvailable: "2023-05-22"
    },
    {
        name: "Ganpati Enclave",
        location: "street 42 Dubai",
        imageUrl: "https://wp-tid.zillowstatic.com/25/real-estate-comps-91b8c8.jpg",
        price: 6000,
        propertyType: "House",
        dateAvailable: "2023-04-27"
    },
    {
        name: "Ganpati Enclave",
        location: "2nd Enclave LA ",
        imageUrl: "https://mediacdn.99acres.com/media1/18975/2/379502636M-1661946378960.jpg",
        price: 3000,
        propertyType: "Flat",
        dateAvailable: "2023-02-28"
    },
    {
        name: "Ganpati Enclave",
        location: "Plaam Vihar Gurgaon",
        imageUrl: "https://media.onthemarket.com/properties/12121400/1425266745/image-0-480x320.jpg",
        price: 4000,
        propertyType: "Plot",
        dateAvailable: "2022-02-22"
    },
    {
        name: "Ganpati Enclave",
        location: "cyber park Banglore",
        imageUrl: "https://www.pmg-goa.com/images/property/1613039889_img_3740.jpg",
        price: 5000,
        propertyType: "House",
        dateAvailable: "2023-03-22"
    },
    {
        name: "Ganpati Enclave",
        location: "chandani chok delhi",
        imageUrl: "https://ap.rdcpix.com/a0fd81e5f3fa2e068e6b11192b722c38l-m2993741320od-w480_h360_x2.jpg",
        price: 1500,
        propertyType: "Villa",
        dateAvailable: "2023-02-22"
    },
]


export const fetchProperties = (filterData) => {
    console.log(filterData)
    let filteredProperties = PropertyData;
    if (filterData.location) {
        filteredProperties = filteredProperties.filter(property => property.location.toLowerCase().includes(filterData.location.toLowerCase()));
    }
    if (filterData.propertyType) {
        filteredProperties = filteredProperties.filter(property => property.propertyType.toLowerCase() === filterData.propertyType);
    }
    if (filterData.date) {
        filteredProperties = filteredProperties.filter(property => property.dateAvailable < filterData.date);
    }
    if (filterData.price && filterData.price.low && filterData.price.high) {
        filteredProperties = filteredProperties.filter(property => {
            return property.price <= filterData.price.high && property.price >= filterData.price.low
        });
    }


    const totalProperties = filteredProperties.length;
    if (filterData.page && filterData.pageSize) {
        filteredProperties = filteredProperties.slice((filterData.page - 1) * filterData.pageSize, filterData.page * filterData.pageSize);
    }
    console.log(totalProperties, filteredProperties)
    return { filteredProperties, totalProperties };
}