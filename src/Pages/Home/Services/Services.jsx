import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 className="text-[#FF3811] text-2xl font-bold">Service</h1>
                <h2 className="text-3xl lg:text-5xl font-bold">Our Service Area</h2>
                <p className="px-6">the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which do not look even slightly believable</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
                {
                    services.map(service => <ServiceCard key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;