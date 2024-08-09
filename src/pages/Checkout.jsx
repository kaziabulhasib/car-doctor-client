import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, description, service_id } = service;

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    // const serviceName = form.serviceName.value;
    // const serviceType = form.serviceType.value;
    // const servicePrice = form.servicePrice.value;
    // const serviceFacility = form.serviceFacility.value;
    // const serviceDetails = form.serviceDetails.value;
    const serviceData = {
      title,
      price,
      description,
      service_id,
      _id,
    };
    console.log(serviceData);
    form.reset();
  };
  return (
    <div className='my-36'>
      <h1>Checkout for :{title}</h1>
      <form
        onSubmit={handleCheckout}
        className='max-w-4xl mx-auto bg-gray-100 p-24 rounded-lg'>
        {/* ROW 1  */}
        <div className='mt-6 flex gap-6 '>
          <input
            className='block w-full mt-4 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='serviceName'
            type='text'
            placeholder='Service Name'
            defaultValue={title}
          />
          <input
            defaultValue={service_id}
            className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='serviceId'
            type='text'
            placeholder='Service Type'
          />
        </div>
        {/* ROW 2  */}
        <div className='mt-6 flex gap-6 '>
          <input
            className='block w-full mt-4 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='servicePrice'
            type='text'
            placeholder='Service Price'
            defaultValue={price}
          />
          <input
            defaultValue={_id}
            className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='serviceFacility'
            type='text'
            placeholder='Service Facility'
          />
        </div>
        {/* text Area  */}
        <div>
          <textarea
            defaultValue={description}
            name='serviceDetails'
            placeholder='Service deails...'
            className='block mt-6   w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'></textarea>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <button className='px-6 py-2 w-full mt-6 font-medium text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
