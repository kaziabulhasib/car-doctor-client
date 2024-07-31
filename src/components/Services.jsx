import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className='my-16 '>
      <h1 className='text-2xl text-center font-bold my-16'>Our Service Area</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {services.map((service) => (
          <>
            {/* <h1 key={service._id}>Name:{service.title}</h1> */}
            <ServiceCard key={service._id} data={service}></ServiceCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
