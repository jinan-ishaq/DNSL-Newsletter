import AppButton from "./AppButton";

const SeekHelp = () => {
    return (
      <section className='w-full py-16 bg-[#FEBB37] text-white px-4'>
        <section className='max-w-[1240px] mx-auto grid lg:grid-cols-3 align-center'>
            <h1 className='md:text-4xl lg:col-span-2 my-4 sm:text-3xl text-2xl font-bold py-2 md:w-[75%] self-center '>
              Don Not <span className="text-[#ea6e40]">Hesitate</span> To Ask For Help. We Are Here To Help You.
            </h1>
          <section className='my-4'>
            <section className='flex flex-col sm:flex-row items-center justify-between w-full mt-4 md:space-x-8'>
              <input
                className='p-3 flex w-full md:w-3/4 rounded-md text-black'
                type='email'
                placeholder='Enter Email'
              />
             <AppButton title="Notify Me"/>
            </section>
            <p>Sign up to our newsletter and stay up to date.</p>
          </section>
        </section>
      </section>
    );
  };
  
  export default SeekHelp;