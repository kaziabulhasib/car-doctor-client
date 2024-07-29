import slide1 from "../assets/images/banner/1.jpg";
import slide2 from "../assets/images/banner/2.jpg";
import slide3 from "../assets/images/banner/3.jpg";
import slide4 from "../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className='carousel w-full my-20 h-[600px] rounded-lg'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img src={slide1} className='w-full' />

        <div className='absolute right-12 bottom-12 flex gap-4'>
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
