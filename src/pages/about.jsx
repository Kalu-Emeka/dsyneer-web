import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function About () {
    return (
        <>
            <Navbar/>
            <div className="header pt-[140px] pr-[100px] pb-[30px] pl-[80px] text-black bg-[#FFFFFF] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center flex-col text-center'>
                        <h2 className="mb-2 w-[48%] text-[50px] text-[#1C1C1C] font-medium sm:w-full md:w-full lg:w-[55%] sm:text-[25px] md:text-[27px] lg:text-[40px]">Making African Fashion Accessible Anywhere in the World</h2>
                        <p className='w-[40%] text-[#0A0A0A] text-medium text-[17px] mb-7 sm:mt-[15px] md:mt-[15px] lg:mt-0 sm:text-[13.5px] lg:text-[15px]  sm:w-[97%] md:w-[70%] lg:w-[65%]'>DSYNEER bridges the gap between global clients and African fashion designers, making custom traditional wear accessible, reliable, and secure.</p>
                    </div>
                </div>  
            </div>
            <div className='grid grid-cols-3 gap-0 place-items-center bg-[#FFFDF9] py-[60px] px-[90px] sm:gap-4 md:gap-4 lg:gap-0 sm:py-[30px] md:py-[30px] lg:py-[60px] sm:px-[30px] md:px-[30px] lg:px-[90px]'>
                <img className='object-contain shadow-md rounded-lg w-[70%] sm:w-[97%] md:w-[90%] lg:w-[70%] sm:mr-[15px] lg:mr-0' src="/Images/ImageWithFallback3.webp" alt="" />
                <img className='object-contain shadow-md rounded-lg w-[70%] sm:w-[97%] md:w-[90%] lg:w-[70%] sm:mr-[4px] lg:mr-0' src="/Images/ImageWithFallback12.png" alt="" />
                <img className='object-contain shadow-md rounded-lg w-[60%] sm:w-[86%] md:w-[90%] lg:w-[62%]' src="/Images/about2.webp" alt="" />
            </div>
            <section className='mt-[50px]' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='grid grid-cols-2 gap-4 bg-white py-[40px] px-[40px] sm:px-[10px] md:px-[10px] lg:px-[40px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col bg-white px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px]'>
                        <h2 className='text-[25px] pb-[20px]'>The Challenge</h2>
                        <p className='text-[15px]'>Global communities worldwide struggle to maintain their cultural connection through traditional fashion. The challenges are real and frustrating:</p>
                        <div className='flex mt-[20px]'>
                            <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container.png" alt="" />
                            <p>Inaccurate measurements leading to poor-fitting garments</p>
                        </div>
                            <div className='flex mt-[20px]'>
                            <img className='w-[4%] mr-[10px] object-contain'  src="/icons/Container.png" alt="" />
                            <p>Delayed deliveries and unreliable shipping</p>
                        </div>
                            <div className='flex mt-[20px]'>
                            <img className='w-[4%] mr-[10px] object-contain'  src="/icons/Container.png" alt="" />
                            <p>Risky payment methods without protection</p>
                        </div>
                            <div className='flex mt-[20px]'>
                            <img className='w-[4%] mr-[10px] object-contain'  src="/icons/Container.png" alt="" />
                            <p>Communication barriers between clients and fashion designers</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='object-contain shadow-md rounded-lg w-[70%]' src="/Images/Images.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='bg-[#FFFDF9] py-[60px] px-[90px] mt-[30px] sm:px-[30px] md:px-[30px] lg:px-[90px]' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                <div className='flex justiy-center items-center flex-col mt-2'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>Our Solution</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] w-[40%] text-center sm:w-full md:w-full lg:w-[40%]'>We've built a comprehensive platform that addresses every pain point in the global-fashion designer relationship.</p>
               </div>
               <div className="flex space-x-10 mt-12 sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-10">
                    <div className='border border-2 rounded-lg px-[20px] py-[20px] mb-[10px] w-[90%]'>
                        <img className='w-[11%] object-contain mb-[27px]' src="/icons/AboutPage3.png" alt=""/>
                        <div>
                            <p className='text-[#0A0A0A] text-[14px]'>AI-Powered Measurements</p>
                            <p className='text-[#0A0A0A] text-[14px] mt-[20px]'>Our smartphone technology ensures accurate measurements every time.</p>
                        </div>
                    </div> 
                    <div className='border border-2 rounded-lg px-[20px] py-[20px] mb-[10px] w-[90%]'>
                        <img className='w-[11%] object-contain mb-[27px]' src="/icons/AboutPage.png" alt=""/>
                        <div>
                            <p className='text-[#0A0A0A] text-[14px]'>Verified Fashion Desiigners</p>
                            <p className='text-[#0A0A0A] text-[14px] mt-[20px]'>Work with trusted professionals vetted for quality and reliability.</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-10 mt-12 sm:flex-col lg:flex-row sm:space-x-0 lg:space-x-10">
                     <div className='border border-2 rounded-lg px-[20px] py-[20px] mb-[10px] w-[90%]'>
                        <img className='w-[11%] object-contain mb-[27px]' src="/icons/AboutPage1.png" alt=""/>
                        <div>
                            <p className='text-[#0A0A0A] text-[14px]'>Global Delivery Network</p>
                            <p className='text-[#0A0A0A] text-[14px] mt-[20px]'>Our smartphone technology ensures accurate measurements every time.</p>
                        </div>
                    </div> 
                     <div className='border border-2 rounded-lg px-[20px] py-[20px]  w-[90%]'>
                        <img className='w-[11%] object-contain mb-[27px]' src="/icons/AboutPage4.png" alt=""/>
                        <div>
                            <p className='text-[#0A0A0A] text-[14px]'>Escrow Protection</p>
                            <p className='text-[#0A0A0A] text-[14px] mt-[20px]'>Secure payments that protect both clients and fashion designers.</p>
                        </div>
                    </div> 
                </div>
            </section>
            <section  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justiy-center items-center flex-col mt-12'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>Who We Serve</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] text-center'>DSYNEER creates value for both sides of the marketplace</p>
               </div>
               <div className='grid grid-cols-2 gap-4 bg-white py-[40px] px-[40px] sm:px-[10px] md:px-[10px] lg:px-[40px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col bg-white px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px] py-[30px] border border-2 sm:ml-[20px] lg:ml-0'>
                        <div className='flex items-center'>
                            <h2 className='text-[20px] pb-[20px] mr-[10px]'>Global Clients</h2> 
                            {/* <img className='w-[5%] onject-contain pb-[20px] mr-[5px]' src="/icons/usa.webp" alt="" />
                            <img className='w-[5%] onject-contain pb-[20px] mr-[5px]' src="/icons/uk.webp" alt="" />
                            <img className='w-[5%] onject-contain pb-[20px]' src="/icons/can.webp" alt="" /> */}
                        </div>
                        <p className='text-[15px]'>Stay connected to your roots with authentic African fashion, delivered anywhere in the world.</p>
                        <div className='flex mt-[20px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Access to verified African fashion designers</p>
                        </div>
                            <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Accurate phone-based measurements</p>
                        </div>
                            <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Secure escrow payments</p>
                        </div>
                        <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Real-time communication</p>
                        </div>
                        <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Global delivery tracking</p>
                        </div>
                    </div>
                   <div className='flex flex-col bg-white px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px] py-[30px] border border-2 sm:ml-[20px] lg:ml-0'>
                        <div className='flex items-center'>
                            <h2 className='text-[20px] pb-[20px] mr-[5px]'>African Fashion Designers</h2>
                            {/* <img className='w-[5%] onject-contain pb-[20px]' src="/icons/nig.webp" alt="" /> */}
                        </div>
                        <p className='text-[15px]'>Expand your business globally and manage global clients with confidence.</p>
                        <div className='flex mt-[20px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Access to global client base</p>
                        </div>
                            <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Secure payment processing</p>
                        </div>
                            <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Secure payment processing</p>
                        </div>
                        <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Order management tools</p>
                        </div>
                        <div className='flex mt-[10px]'>
                            <img className='w-[3%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                            <p className='text-[14px]'>Reliable payment guarantee</p>
                        </div>
                    </div>
                </div>
            </section>
             <section className='bg-[#FFFDF9] py-[60px] px-[90px] mt-[30px] sm:px-[30px] md:px-[30px] lg:px-[90px]' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                <div className='flex justiy-center items-center flex-col mt-2'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>Our Story</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] w-[55%] sm:w-full lg:w-[55%]'>DSYNEER was born from a simple observation: millions of Africans living abroad want to stay connected to their culture through traditional fashion, but the process is frustratingly difficult.</p>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] w-[55%] sm:w-full lg:w-[55%]'>Our founders experienced these challenges firsthand—dealing with incorrect measurements sent via WhatsApp, unpredictable delivery times, and the anxiety of sending money without any guarantee of receiving the right product.</p>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] w-[55%] sm:w-full lg:w-[55%]'>We knew there had to be a better way. By combining technology with deep respect for African craftsmanship, we created a platform that empowers both clients and tailors to do what they do best—create beautiful, perfectly fitted garments that celebrate African heritage.</p>
               </div>
            </section>
            <section className='mt-[10px] bg-[#6B3E26] py-[90px]'>
                <div className='flex justiy-center items-center flex-col'>
                    <h2 className='text-white text-[28px] sm:text-[25px] md:text-[25px] lg:text-[28px] text-center'>Join Us in Revolutionizing African Fashion</h2>
                    <p className='text-[#C3B1A8] text-[14px] mt-[15px] w-[35%] text-center sm:w-[95%] md:w-[95%] lg:w-[35%]'>Whether you're a client or a fashion designer, DSYNEER is here to make your experience seamless.</p>
                    <div className="flex items-center text-[15px] space-x-5 text-[#1C1C1C] pl-[40px] mt-[25px]">
                        <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-[#F4A300] text-[#6B3E26] rounded-[9px] px-[17px] py-[9px] font-[10px]">Book a Demo</button></a>
                        <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-white text-[#1C1C1C] rounded-[9px] px-[17px] py-[9px] font-[10px]">Join Waitlist</button></a>
                    </div>
               </div>
            </section>
            <Footer/>
        </>
    )
}
export default About