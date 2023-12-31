type CredentialsProps = {
  handleContinue: () => void;
};

const Credentials = ({ handleContinue }: CredentialsProps) => {
  return (
    <form className='mt-10 w-full max-w-md flex flex-col gap-6'>
      <div className='font-semibold text-customWhite text-md'>
        <span>Full Name</span>
        <input
          type='text'
          name='name'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </div>

      <div className='font-semibold text-customWhite text-md'>
        <span>Email Address</span>

        <input
          type='email'
          name='email'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </div>

      <div className='font-semibold text-customWhite text-md'>
        <span>Mobile Number</span>
        <input
          type='text'
          name='number'
          className='w-full rounded-lg mt-2 p-3 text-sm text-customWhite bg-transparent border-2 border-customGray font-bold'
        />
      </div>

      <button
        onClick={handleContinue}
        className='rounded-lg py-3 px-9 font-bold text-customMain hover:bg-gray-300 white_bg transition duration-300 ease-in-out'
      >
        Continue
      </button>
    </form>
  );
};

export default Credentials;
