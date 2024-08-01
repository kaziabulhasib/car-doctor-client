import { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <Link to='/'>Home </Link>
      </li>
      <li>
        {" "}
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/'>Services</Link>
      </li>
      <li>
        <Link to='/'>Blogs</Link>
      </li>
      <li>
        <Link to='/'>Contact</Link>
      </li>

      {user ? (
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
      ) : (
        <>
          {" "}
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      // style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.19)" }}
      className='navbar bg-base-100 opacity-90  px-24 py-4 fixed  top-0 z-10 max-w-full mx-auto h-20'>
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
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
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
