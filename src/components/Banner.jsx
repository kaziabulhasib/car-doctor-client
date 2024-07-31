import slide1 from "../assets/images/banner/1.jpg";
import slide2 from "../assets/images/banner/2.jpg";
import slide3 from "../assets/images/banner/3.jpg";
import slide4 from "../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className='carousel w-full my-[80px] h-[800px]  rounded-lg bg-gradient-to-r from-[#151515] to-[#15151500]'>
      <div id='slide1' className='carousel-item relative w-full  '>
        <img src={slide1} className='w-full' />

        <div className='absolute bottom-24 left-16   gap-4 w-1/3'>
          <div className='text-white  space-y-6 '>
            <h1 className='text-5xl font-bold leading-tight'>
              Affordable <br /> Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex gap-6'>
              <button className='btn btn-warning'>Latest Project</button>
              <button className='btn btn-outline btn-secondary'>
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className='absolute right-12 bottom-12 flex justify-end gap-4'>
          <a href='#slide4' className='btn btn-circle bg-gray-500 text-white'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle bg-red-400 text-white'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img src={slide2} className='w-full' />
        <div className='absolute bottom-24 left-16   gap-4 w-1/3'>
          <div className='text-white  space-y-6 '>
            <h1 className='text-5xl font-bold leading-tight'>
              Affordable <br /> Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex gap-6'>
              <button className='btn btn-warning'>Latest Project</button>
              <button className='btn btn-outline btn-secondary'>
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className='absolute right-12 bottom-12 flex gap-4'>
          <a href='#slide1' className='btn btn-circle bg-gray-500 text-white'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle bg-red-400 text-white'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img src={slide3} className='w-full' />
        <div className='absolute bottom-24 left-16   gap-4 w-1/3'>
          <div className='text-white  space-y-6 '>
            <h1 className='text-5xl font-bold leading-tight'>
              Affordable <br /> Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex gap-6'>
              <button className='btn btn-warning'>Latest Project</button>
              <button className='btn btn-outline btn-secondary'>
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className='absolute right-12 bottom-12 flex gap-4'>
          <a href='#slide4' className='btn btn-circle bg-gray-500 text-white'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle bg-red-400 text-white'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img src={slide4} className='w-full' />
        <div className='absolute bottom-24 left-16   gap-4 w-1/3'>
          <div className='text-white  space-y-6 '>
            <h1 className='text-5xl font-bold leading-tight'>
              Affordable <br /> Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex gap-6'>
              <button className='btn btn-warning'>Latest Project</button>
              <button className='btn btn-outline btn-secondary'>
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className='absolute right-12 bottom-12 flex gap-4'>
          <a href='#slide2' className='btn btn-circle bg-gray-500 text-white'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle bg-red-400 text-white'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
