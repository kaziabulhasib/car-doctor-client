import { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./navbar.css";
import toast from "react-hot-toast";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Sucessfull");
    // navigate("/signup");
  };
  const navLinks = (
    <>
      <li className='nav-link'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='nav-link'>
        {" "}
        <NavLink to='/about'>About</NavLink>
      </li>

      {user && (
        <li className='nav-link'>
          <NavLink to='/bookings'>MY Bookings</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div
      // style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.19)" }}
      className='navbar bg-base-100 opacity-90  px-24 py-4 fixed  top-0 z-10 max-w-full mx-auto h-20 mb-24'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            {navLinks}
          </ul>
        </div>
        <Link to='/'>
          <img src={logo} alt='' width='72px' height='36px' />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul id='nav-cen'>{navLinks}</ul>
      </div>

      <div className='navbar-end'>
        <div>
          {user ? (
            <>
              <div className='dropdown '>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img
                      alt='Tailwind CSS Navbar component'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center'>
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink className='btn btn-outline btn-sm' to='/login'>
              Login
            </NavLink>
          )}
        </div>

        <button className='btn btn-outline btn-sm mx-6 btn-error '>
          <span className='hover:text-white text-red-500'> Appoitment</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
