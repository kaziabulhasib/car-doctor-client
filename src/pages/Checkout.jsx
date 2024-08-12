import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, description, img } = service;
  const { user } = useContext(AuthContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const serviceDate = form.date.value;
    // const serviceDetails = form.serviceDetails.value;

    const serviceData = {
      serviceName,
      servicePrice,
      // serviceDetails,
      serviceDate,
      img,
      email: user.email,
    };
    console.log(serviceData);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booking  sucessfully");
        }
      });
  };
  return (
    <div className='my-36'>
      <h1 className='text-3xl my-6 text-center'>Checkout for :{title}</h1>
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
            className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='date'
            type='date'
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
            defaultValue={user?.email}
            className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
            name='userEmail'
            type='email'
          />
        </div>
        {/* text Area  */}
        {/* <div>
          <textarea
            defaultValue={description}
            name='serviceDetails'
            placeholder='Service deails...'
            className='block mt-6   w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'></textarea>
        </div> */}

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
