import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  return (
    <div className='my-36'>
      <h1>Checkout for :{title}</h1>
      <p>Price:{price}</p>
    </div>
  );
};

export default Checkout;
