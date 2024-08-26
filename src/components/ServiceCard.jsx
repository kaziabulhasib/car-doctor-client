import { Link } from "react-router-dom";
const ServiceCard = ({ data }) => {
  const { title, img, price, _id } = data;
  return (
    <div className='card card-compact bg-base-100 hover:bg-base-200   drop-shadow-xl hover:cursor-pointer rounded-lg'>
      <figure className='h-[250px]'>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='text-xl font-medium'>{title}</h2>
        <p>Price: {price}</p>
        <div className='flex justify-between'>
          {" "}
          <Link to={`/checkout/${_id}`}>
            <button className='btn btn-sm '>Book Now</button>
          </Link>
          <Link to={`/details/${_id}`}>
            <button className='btn btn-sm '>See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
