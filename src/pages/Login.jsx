import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    // form.reset();
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = { email };

        // get acess token

        axios.post("http://localhost:5000/jwt", user).then((res) => {
          // console.log(res.data);
          if (res.data.success) {
            navigate(location.state ? location.state : "/");
          }
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <header className='bg-gray-700 max-w-7xl lg:px-24 py-6 lg:my-36  '>
        <div className='container px-6 mx-auto'>
          <nav className='flex flex-col py-24 sm:flex-row sm:justify-between sm:items-center'>
            <a href='#'>
              <img className='w-auto h-6 sm:h-7' src={logo} alt='cardoc' />
            </a>

            <div className='flex items-center mt-2 -mx-2 sm:mt-0'>
              <a
                href='#'
                className='px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700'>
                Sign In
              </a>
              <Link
                to='/signup'
                href='#'
                className='px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800'>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
        <div className='flex flex-col items-center lg:h-[36rem] lg:flex-row'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-semibold text-gray-100 lg:text-4xl'>
              Brand
            </h2>

            <h3 className='mt-2 text-2xl font-semibold text-gray-100'>
              Hello <span className='text-blue-400'>Guest</span>
            </h3>

            <p className='mt-4 text-gray-100'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              eum modi incidunt adipisci quod porro et non exercitationem quasi,
              maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?
            </p>
          </div>

          <div className='flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0'>
            <div className='w-full max-w-md bg-white rounded-lg dark:bg-gray-800'>
              <div className='px-6 py-8 text-center'>
                <h2 className='text-2xl font-semibold text-gray-700 dark:text-white'>
                  Sign In
                </h2>

                <form onSubmit={handleSignin}>
                  <div className='mt-4'>
                    <input
                      className='block w-full mt-4 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
                      name='email'
                      type='email'
                      placeholder='Email address'
                    />
                    <input
                      className='block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring'
                      name='password'
                      type='password'
                      placeholder='Password'
                    />
                  </div>

                  <div className='flex items-center justify-between mt-4'>
                    <a
                      href='#'
                      className='text-sm text-gray-600 dark:text-gray-200 hover:underline'>
                      Forget Password?
                    </a>

                    <button className='px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700'>
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
