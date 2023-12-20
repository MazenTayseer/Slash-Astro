import { motion } from "framer-motion";

const signInPage = () => {
  const onSignInClick = () => {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className='flex flex-col justify-center items-center my-32'
    >
      <h1 className='text_white text-center text-4xl font-bold font-satoshi'>
        <span>Sign In</span>
      </h1>

      <form className='mt-10 w-full max-w-md flex flex-col gap-6'>
        <div className='font-semibold text-customWhite text-md'>
          <span>Email Address</span>

          <input
            type='email'
            name='email'
            className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
          />
        </div>

        <div className='font-semibold text-customWhite text-md'>
          <span>Password</span>
          <input
            type='password'
            name='password'
            className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
          />
        </div>

        <button
          onClick={onSignInClick}
          className='rounded-lg py-3 px-9 font-bold text-customMain bg-customLime hover:brightness-75 transition duration-300 ease-in-out'
        >
          Sign In
        </button>
      </form>
    </motion.div>
  );
};

export default signInPage;
