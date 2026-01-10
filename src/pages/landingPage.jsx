import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="header pt-[140px] pr-[100px] pb-[30px] pl-[80px] text-black bg-[#FFFFFF] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-between items-center sm:flex-col md:flex-col lg:flex-row'>
                    <div>
                        <h2 className="mb-2 w-[48%] text-[50px] text-[#1C1C1C] font-medium sm:w-full md:w-full lg:w-[70%] sm:text-[25px] md:text-[27px] lg:text-[40px] lg:w-[40px]">Get Custom African Wear from Trusted Designers, Wherever You Are</h2>
                        <p className='w-[40%] text-[#0A0A0A] text-medium text-[17px] mb-7 sm:mt-[15px] md:mt-[15px] lg:mt-0 sm:text-[13.5px] lg:text-[15px]  sm:w-[100%] md:w-[70%] lg:w-[70%]'>Connect with verified African designers, take measurements with your phone, get protectedby our escrow system and receive perfectly fitted outfits delivered to your doorstep.</p>
                        <div className='text-[13px] sm:mb-[30px] md:mb-[30px] lg:mb-0'>
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-[#6B3E26] text-white rounded-[9px] px-[17px] py-[9px] font-[10px] mr-[20px]">Book a Demo</button></a>
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="border-[#6B3E26] border-1 text-[#6B3E26] rounded-[9px] px-[17px] py-[8px] font-[10px]">Join Waitlist</button></a>
                        </div>
                    </div>
                    <div className='ic w-[29%] sm:w-[90%] md:w-[70%] lg:w-[70%]'>
                        <img src="/Images/Container.webp" className='' alt="" />
                    </div>
                </div>  
            </div>
            <section id="" className='mt-[50px] py-10 sm:p-[25px] md:p-[25px] lg:py-12 pl-[70px] sm:mt-[20px] md:mt-[20px] lg:mt-[50px]'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
               <div className='flex justiy-center items-center flex-col mt-5 sm:mt-2 md:mt-2 lg:mt-5'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>How It Works</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px]'>Three simple steps to getting your perfect custom outfit</p>
               </div>
                <div className="grid grid-cols-3 pl-[80px] gap-2 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center sm:pl-[60px] md:pl-[60px] lg:pl-[80px]">
                    <div className='sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                        <img className='w-[80%] rounded-t-md' src="/Images/ImageWithFallback.webp" alt=""/>
                        <div className='pl-[25px] pt-[20px] border rounded-b-md w-[80%] shadow-sm'>
                            <h3 className='text-[#F4A300] font-medium text-[27px]'>01</h3>
                            <p className='text-[#0A0A0A] text-[14px] mt-[15px]'>Find Your Fashion Designer</p>
                            <p className='text-[#0A0A0A] text-[13px] mt-[10px] w-[90%] pb-[30px]'>Browse verified African designers with portfolios and reviews from global  clients.</p>
                        </div>
                    </div> 
                    <div className='sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                        <img className='w-[80%] rounded-t-md' src="/Images/HomePage.webp" alt=""/>
                        <div className='pl-[25px] pt-[20px] border rounded-b-md w-[80%] shadow-sm'>
                            <h3 className='text-[#F4A300] font-medium text-[27px]'>02</h3>
                            <p className='text-[#0A0A0A] text-[14px] mt-[15px]'>Get Measured & Styled</p>
                            <p className='text-[#0A0A0A] text-[13px] mt-[10px] w-[95%] pb-[30px]'>Use our AI-powered phone measurement tool and collaborate on your designs</p>
                        </div>
                    </div>  
                    <div className=''>
                        <img className='w-[80%] rounded-t-md' src="/Images/ImageWithFallback2.webp" alt=""/>
                        <div className='pl-[25px] pt-[20px] border rounded-b-md w-[80%] shadow-sm'>
                            <h3 className='text-[#F4A300] font-medium text-[27px]'>03</h3>
                            <p className='text-[#0A0A0A] text-[14px] mt-[15px]'>Pay Securely & Receive Delivery</p>
                            <p className='text-[#0A0A0A] text-[13px] mt-[10px] w-[97%] pb-[30px]'>Pay safely with escrow protection and track your order to your doorstep anywhere in the world.</p>
                        </div>
                    </div>  
                </div>
            </section>
            <section className='mt-[10px] p-20 sm:p-[25px] md:p-[25px] lg:p-15'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justiy-center items-center flex-col mt-5'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>Why Choose DSYNEER</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px] sm:text-center md:text-center lg:text-left'>The trusted platform connecting global clients with African designers</p>
               </div>
               <div className="grid grid-cols-3 pl-[80px] gap-2 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center sm:pl-[60px] md:pl-[60px] lg:pl-[80px]">
                    <div className=''>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/icons/Container2.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px]'>Accurate AI Measurement</p>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px] w-[80%] mt-[5px]'>Get precise measurements using just your smartphone camera.</p>
                            </div>
                        </div>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                    <div className=''>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/icons/Container3.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px]'>Trusted Fashion Designers</p>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px] w-[80%] mt-[5px]'>Work with verified professionals with proven track records.</p>
                            </div>
                        </div>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                    <div className=''>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/icons/Container4.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px]'>Safe Escrow Payment</p>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px] w-[80%] mt-[5px]'>Your money is protected until you receive your perfect outfit.</p>
                            </div>
                        </div>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                    <div className='mt-[10px]'>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/icons/Container5.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px]'>Global Delivery</p>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px] w-[80%] mt-[5px]'>Receive your custom pieces anywhere in the world, reliably.</p>
                            </div>
                        </div>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                    {/* <div className=''>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/icons/Container6.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px]'>Seamless Communication</p>
                                <p className='text-[#0A0A0A] text-[13px] ml-[10px] w-[80%] mt-[5px]'>Real-time messaging and video calls with your tailor.</p>
                            </div>
                        </div>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div>  */}
                </div>
            </section>
            <section className='clipmt-[10px] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-center items-center sm:flex-col md:flex-col lg:flex-row'>
                    <img className='w-[40%] object-contain sm:w-[70%] md:w-[60%] lg:w-[40%]' src="/Images/Container7.webp" alt=""/>
                    <img className='w-[37.5%] object-contain mb-[28px] rounded-[10px]  sm:w-[70%] md:w-[60%] lg:w-[37.5%]'  src="/Images/ImageWithFallback.png" alt=""/>
                </div>
            </section>
             <section className='mt-[10px] p-20 sm:p-[25px] md:p-[25px] lg:p-15'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justiy-center items-center flex-col mt-5'>
                    <h2 className='text-[#1C1C1C] font-medium text-[25px]'>What Our Community Says</h2>
                    <p className='text-[#0A0A0A] text-[15px] mt-[15px]'>Trusted by clients and fashion designers across continents</p>
               </div>
                <div className="grid grid-cols-3 gap-2 mt-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
                    <div className='border-2 rounded-lg p-4 w-[87%]'>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/Images/Container8.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[15px] ml-[10px]'>Vanessa</p>
                                <p className='flex text-[#0A0A0A] text-[13px] ml-[10px] mt-[5px]'><img className='w-[5%] object-contain mr-[5px]' src="/icons/usa.webp" />Atlanta, USA</p>
                            </div>
                        </div>
                        <p className='text-[#0A0A0A] text-[15px] ml-[10px] w-[85%] mt-[5px] sm:w-[95%] md:w-[95%] lg:w-[85%]'>"Perfect fit all the way to Atlanta! I've never felt more confident in my traditional wear."</p>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                    <div className='border-2 rounded-lg p-4 w-[87%]'>
                        <div className='flex'>
                            <img className='w-[10%] object-contain mb-[22px]' src="/Images/Container9.webp" alt=""/>
                            <div>
                                <p className='text-[#0A0A0A] text-[15px] ml-[10px]'>Bola</p>
                                <p className='flex text-[#0A0A0A] text-[13px] ml-[10px] mt-[5px]'><img className='w-[5%] object-contain mr-[5px]' src="/icons/nig.webp" />Lagos, Nigeria</p>
                            </div>
                        </div>
                        <p className='text-[#0A0A0A] text-[15px] ml-[10px] w-[83%] mt-[5px] sm:w-[95%] md:w-[95%] lg:w-[83%]'>"Managing my diaspora clients has never been easier. Payments are secure and communication is seamless."</p>
                        <div className='pl-[25px] pt-[20px] w-[80%]'>
                        </div>
                    </div> 
                </div>
            </section>
            <section className='mt-[10px] bg-[#6B3E26] py-[90px]'>
                <div className='flex justiy-center items-center flex-col'>
                    <h2 className='text-white text-[28px] sm:text-[25px] md:text-[25px] lg:text-[28px] text-center'>Ready to Experience Stress-Free Fashion Designing?</h2>
                    <p className='text-[#C3B1A8] text-[14px] mt-[15px] w-[35%] text-center sm:w-[95%] md:w-[95%] lg:w-[35%]'>Join thousands of satisfied Clients who trust DSYNEER for their custom African wear.</p>
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
export default LandingPage