import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
