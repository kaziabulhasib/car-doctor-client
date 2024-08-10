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
    navigate("/signup");
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
      <li className='nav-link'>
        <Link to='/'>Services</Link>
      </li>
      <li className='nav-link'>
        <NavLink to='/blogs'>Blogs</NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to='/contact'>Contact</NavLink>
      </li>

      {user ? (
        <li className='nav-link'>
          <button onClick={handleLogout} t>
            Logout
          </button>
        </li>
      ) : (
        <>
          {" "}
          <li className='nav-link'>
            <NavLink to='/login'>Login</NavLink>
          </li>
        </>
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
        <button className='btn btn-ghost btn-circle'>
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
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator'>
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
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-xs badge-primary indicator-item'></span>
          </div>
        </button>
        <button className='btn btn-outline  btn-error'>Appoitment</button>
      </div>
    </div>
  );
};

export default NavBar;
