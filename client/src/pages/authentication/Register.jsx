import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from '/SkillNexus_logo.png';
import bgImg from '../../assets/images/register.jpg';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from './../../components/Loader';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";


const Registration = () => {

  const { createUser, user, updateUserProfile, loggedOut, googleLogin, gitHubLogin } = useAuth();

  // custom loader for registration
  const [customLoader, setCustomLoader] = useState(false);

  // password show
  const [passShow, setPassShow] = useState('');

  // Navigation
  const navigate = useNavigate();
  const whereTo = '/login';

  // react form
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      // console.log(watch('password'))
      return toast.error("Password must contain an Uppercase, a Lowercase and Length must be at least 6", { autoClose: 3000, theme: "colored" })
    }

    // create user profile and update user
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {

            setCustomLoader(true)
            // Profile updated!
            toast.success("Registration successful!🎉", { autoClose: 3000, theme: "colored" })
            toast.info("Try to Login! 😁", { autoClose: 5000, theme: "colored" })

            // loader
            setCustomLoader(false)
            loggedOut();
            navigate(whereTo)

          }).catch((errors) => {

            setCustomLoader(false)
            // An error occurred
            const errorMessage = errors.message.split(':')[1].split('(')[0].trim();

            toast.error(errorMessage, { autoClose: 3000, theme: "colored" });
            navigate('/register');
          });

        // console.log(result)

      })
      .catch(errors => {

        setCustomLoader(false)
        // An error occurred                
        const errorCode = errors.code;
        // Remove 'auth/' prefix and '-' characters
        const cleanedErrorCode = errorCode.replace(/^auth\/|-/g, ' ');
        const words = cleanedErrorCode.split('-');
        const capitalizedWords = words.map(word => word.charAt(1).toUpperCase() + word.slice(2));
        const message = capitalizedWords.join(' ');

        toast.error(`${message}`, { autoClose: 5000, theme: "colored" })
        navigate('/register');
      })
  }

  // Navigation handler for all social platform
  const handleSocialLogin = socialLoginProvider => {
    socialLoginProvider()
      .then(result => {
        if (result.user) {
          toast.success("Logged in successful!🎉", { autoClose: 2000, theme: "colored" })
          navigate(whereTo)
        }
      })
      .catch(error => {
        const errorCode = error.code;
        // Remove 'auth/' prefix and '-' characters
        const cleanedErrorCode = errorCode.replace(/^auth\/|-/g, ' ');
        const words = cleanedErrorCode.split('-');
        const capitalizedWords = words.map(word => word.charAt(1).toUpperCase() + word.slice(2));
        const message = capitalizedWords.join(' ');

        toast.error(`${message}`, { autoClose: 5000, theme: "colored" })
        navigate('/login')
      })
  }

  // Custom loader
  if (customLoader) {
    return <Loader />;
  }

  if (user && location?.pathname == '/login' && location?.state == null) {
    // toast.info(`Dear, ${user?.displayName || user?.email}! You are already Logged in!`, { autoClose: 3000, theme: "colored" });
    return <Navigate to='/' state={location?.pathname || '/'} />
  }


  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-370px)] '>
      <Helmet>
        <title>SkillNexus | Register</title>
      </Helmet>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto md:h-12  h-8 rounded'
              src={logo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Get Your Free Account Now!
          </p>

          <div
            onClick={() => handleSocialLogin(googleLogin)}
            className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:scale-105 hover:bg-primary overflow-hidden '>
            <div className='px-4 py-2'>
              <FcGoogle size='30' />
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>

          <div
            onClick={() => handleSocialLogin(gitHubLogin)}
            className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:scale-105 hover:bg-primary overflow-hidden '>
            <div className='px-4 py-2'>
              <FaGithub size={25} />
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with GitHub
            </span>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              or Registration with email
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                {...register("name", { required: true })}
              />
              <div className="mt-1 animate-pulse">
                {errors.name && <span className="text-red-500">Please fill up Name field</span>}
              </div>
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                {...register("photoURL"
                  // , { required: true }
                )}
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                {...register("email", { required: true })}
              />
              <div className="mt-1 animate-pulse">
                {errors.email && <span className="text-red-500">Please fill up Email field</span>}
              </div>
            </div>

            <div className='mt-4 relative'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={passShow ? "text" : "password"}
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setPassShow(!passShow)}
                className="cursor-pointer absolute top-10 right-4"
              >
                {
                  passShow ? <TfiEye /> : <RxEyeClosed />
                }
              </span>
              <div className="mt-1 animate-pulse">
                {errors.password && <span className="text-red-500">Please fill up Password field</span>}
              </div>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-400 md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-rose-700 uppercase  hover:underline font-semibold animate-pulse'
            >
              sign in
            </Link>

            <span className='w-1/5 border-b dark:border-gray-400 md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Registration