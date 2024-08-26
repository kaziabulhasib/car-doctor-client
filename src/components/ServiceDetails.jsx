import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, _id } = useLoaderData();
  //   console.log(service);
  return (
    <div>
      <h1 className='text-4xl my-6'>Service Details for : {title}</h1>
      <h1>service Id :{_id}</h1>
    </div>
  );
};

export default ServiceDetails;
