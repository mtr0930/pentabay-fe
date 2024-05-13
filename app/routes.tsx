export const routes = [
    {
        title: "HOME",
        href: "#",
    },
    {
        title: "GENERAL TRADE",
        href: "/generaltrade",
        subroutes: [
            {
                title: "Crude Oil",
                href: '#'
            },
            {
                title: "Refined Products & Energy",
                href: '#'
            },
            {
                title: "Bulk Materials",
                href: '#'
            },
            {
                title: "Petro Chemicals",
                href: '#'
            },
            {
                title: "Steel",
                href: '#'
            },
        ]
    },
    {
        title: "PROJECT",
        href: "#",
        subroutes: [
            {
                title: "Oil, Gas & Energy",
                href: '#'
            },
            {
                title: "Power",
                href: '#'
            },
        ]
    },
    {
        title: "ABOUT US",
        href: "#",
    },
    {
        title: "CONTACT",
        href: "#",
    }
];

export const responsive = [
    {
    "id": 1,
    "title": "Swiper Carousel Example",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    "imageUrl": "/skyscraper.jpg"
    },
    {
    "id": 2,
    "title": "Swiper Carousel Example",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    "imageUrl": "/skyscraper.jpg"
    },
    {
    "id": 3,
    "title": "Swiper Carousel Example",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    "imageUrl": "/skyscraper.jpg"
    }
]

type TProjects = {
    [key: string]: ProjectTab[];
};

type ProjectTab = {
    title: string;
    content : string;
}
export const projects:TProjects = {
    "oilgas" : [
        {
            title: "Oil & Gas",
            content: "We provide comprehensive solutions for the oil and gas industry, from exploration to distribution."
        },
        {
            title: "Energy",
            content: "Our expertise extends to the energy sector, including renewable and traditional sources."
        },
        {
            title: "Petrochemicals",
            content: "We understand the unique challenges of the petrochemical industry and can provide tailored solutions."
        },
    ],
    "power" : [
        {
            title: "Power Generation",
            content: "We have expertise in power generation, including conventional and renewable sources."
        },
        {
            title: "Power Transmission",
            content: "Our team can help with power transmission and distribution projects."
        },
        {
            title: "Energy Efficiency",
            content: "We provide solutions to improve energy efficiency and reduce carbon footprint."
        },
    ],
    "privateequity" : [
        {
            title: "Investment Advisory",
            content: "Our team provides expert investment advisory services to private equity firms."
        },
        {
            title: "Portfolio Management",
            content: "We can help manage your private equity portfolio for optimal performance. "
        },
        {
            title: "Fundraising",
            content: "Our expertise extends to fundraising for private equity firms."
        },
    ],
    "banking" : [
        {
            title: "Corporate Banking",
            content: "We provide comprehensive corporate banking solutions to businesses."
        },
        {
            title: "Capital Markets",
            content: "Our expertise extends to the capital markets, including investment banking and trading."
        },
        {
            title: "Wealth Management",
            content: "We offer comprehensive wealth management solutions to high-net-worth individuals."
        },
    ],
    "ict" : [
        {
            title: "Telecommunications",
            content: "We have expertise in the telecommunications industry, including network infrastructure and services."
        },
        {
            title: "IT Consulting",
            content: "Our IT consulting services help organizations optimize their technology investments."
        },
        {
            title: "Digital Transformation",
            content: "We assist clients in their digital transformation journeys to stay competitive."
        },
    ],
    "technology" : [
        {
            title: "Software Development",
            content: "Our software development team creates custom solutions to meet your business needs."
        },
        {
            title: "Cybersecurity",
            content: "We provide comprehensive cybersecurity services to protect your organization."
        },
        {
            title: "Data Analytics",
            content: "Our data analytics experts can help you make data-driven decisions."
        },
    ],
    "consumer" : [
        {
            title: "Retail",
            content: "We have expertise in the retail industry, helping clients optimize their operations."
        },
        {
            title: "E-commerce",
            content: "Our team can help you build and scale your e-commerce business."
        },
        {
            title: "Consumer Goods",
            content: "We understand the consumer goods industry and can provide tailored solutions."
        },
    ],
    "healthcare" : [
        {
            title: "Pharmaceuticals",
            content: "Our expertise extends to the pharmaceutical industry, including drug development and distribution."
        },
        {
            title: "Healthcare IT",
            content: "We provide IT solutions to healthcare organizations to improve patient care and operational   efficiency."
        },
        {
            title: "Medical Devices",
            content: "Our team has expertise in the medical devices industry, helping clients navigate regulatory requirements."
        },
    ]
        
    
}