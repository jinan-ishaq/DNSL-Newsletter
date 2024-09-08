import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
  
  const Footer = () => {
    return (
      <section className='w-full mx-auto py-16 px-16 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black md:space-x-40 justify-center'>
        <section>
          <h1 className='w-full text-3xl font-bold text-[#F5F5DC]'>DNSL</h1>
          <p className='py-4'>We are a global leader in tech innovation, offering well-organized data science courses with a focus on your success.</p>
          <article className='flex justify-between md:w-[90%] my-6'>
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
          </article>
        </section>
        <section className='lg:col-span-2 flex justify-between mt-6 md:w-3/4 space-x-6'>
      <section>
          <h6 className='font-medium text-gray-400'>Services</h6>
          <ul>
              <li className='py-2 text-sm'>Managing</li>
              <li className='py-2 text-sm'>Organization</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
          </ul>
      </section>
      <section>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>Others</li>
          </ul>
      </section>
      <section>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
              <li className='py-2 text-sm'>About Us</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>ContactUs</li>
              <li className='py-2 text-sm'>Team</li>
          </ul>
      </section>
        </section>
      </section>
    );
  };
  
  export default Footer;