const ServiceCard = ({ data }) => {
  const { title, img, price } = data;
  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure className='h-[250px]'>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='text-xl font-medium'>{title}</h2>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
