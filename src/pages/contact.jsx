import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function Contacts  () {
    return (
        <>
            <Navbar/>
            <section className='bg-[#FFFDF9]'>
                    <div className="header pt-[140px] pr-[100px] pb-[30px] pl-[80px] text-black bg-[#FFFFFF] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center flex-col text-center'>
                            <h2 className="mb-2 w-[48%] text-[50px] text-[#1C1C1C] font-normal sm:w-full md:w-full sm:text-[25px] md:text-[27px] lg:text-[40px]">We'd Love to Hear From You</h2>
                            <p className='text-[#0A0A0A] text-medium text-[17px] mb-7 sm:mt-[15px] md:mt-[15px] lg:mt-0 sm:text-[13.5px] lg:text-[15px]'>Have questions, feedback, or partnership inquiries? Get in touch with us.</p>
                        </div>
                    </div>  
                </div>
                <section>
                    <div className='grid grid-cols-2 gap-4 bg-white py-[40px] px-[40px] sm:px-[10px] md:px-[10px] lg:px-[40px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:ml-[20px] lg:ml-0'>
                        <div className='flex flex-col bg-white py-[20px] px-[30px] rounded-[15px] w-[90%] border shadow-sm'>
                            <h2 className='text-[24px] py-[20px]'>Send Us a Message</h2>
                            <form  action="https://formspree.io/f/xqekaqbw" method="POST" className='mt-[10px]'>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>Name</label>
                                    <input className='pl-[15px] py-[5px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]'   name="Name" type="text" placeholder='Your full name' />
                                </div>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>Email</label>
                                    <input className='pl-[15px] py-[5px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]' name="Email Address" type="text" placeholder='your.email@example.com' />
                                </div>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>Subject</label>
                                    <input className='pl-[15px] py-[5px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]' name="Subject" type="text" placeholder='Whats this about?' />
                                </div>
                                <div className='flex flex-col mb-[10px]'>
                                    <label htmlFor="message" className='mb-[10px]'>Message</label>
                                    <textarea className='pl-[15px] py-[5px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]' placeholder='Tell us more...' name="Message" id="" cols="3" rows="2"></textarea>
                                </div>
                                <button type="submit" className='w-full bg-[#6B3E26] text-white py-[13px] rounded-[20px] mb-[120px]'>Send Message</button>
                            </form>
                        </div>
                        <div className='flex flex-col bg-white px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px]'>
                            <h2 className='text-[24px] pb-[20px]'>Contact Information</h2>
                            <p className='text-[15px]'>You can also reach us directly through any of these channels. We typically respond within 24 hours.</p>
                            <div className='border flex py-[18px] px-[20px] rounded-[15px] mt-[30px] shadow-sm'>
                                <img className='w-[10%] object-contain' src="/icons/Container14.webp" alt="" />
                                <div className='ml-[20px]'>
                                    <h3>Email</h3>
                                    <p>hello@dsyneer.com</p>
                                </div>
                            </div>
                            <div className='border flex py-[18px] px-[20px] rounded-[15px] mt-[35px] shadow-sm'>
                                <img className='w-[10%] object-contain' src="/icons/Container15.webp" alt="" />
                                <div className='ml-[20px]'>
                                    <h3>Phone</h3>
                                    <p>+234 (DSYNEER)</p>
                                </div>
                            </div>
                            <div className='border flex py-[18px] px-[20px] rounded-[15px] mt-[35px] shadow-sm'>
                                <img className='w-[10%] object-contain' src="/icons/Container16.webp" alt="" />
                                <div className='ml-[20px]'>
                                    <h3>Locations</h3>
                                    <p>Lagos, Nigeria • Cairo, Egypt</p>
                                </div>
                            </div>
                            <div className='border flex py-[18px] px-[20px] rounded-[15px] mt-[35px] shadow-sm'>
                                <div className='ml-[20px]'>
                                    <h3 className='mb-[10px]'>Our Offices</h3>
                                    <div className='flex'>
                                        <img className='w-[5%] mr-[10px] object-contain' src="/icons/nig.webp" alt="" />
                                        <h4>Lagos, Nigeria</h4>
                                    </div>
                                    <p className='text-[13px] mb-[15px]'>Primary hub for tailor partnerships</p>
                                    <div className='flex'>
                                        <img className='w-[5%] mr-[10px] object-contain' src="/icons/egy.webp" alt="" />
                                        <h4>Cairo, Egypt</h4>
                                    </div>
                                    <p className='text-[13px]'>Regional operations center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[10px] bg-white py-[90px]'>
                    <div className='flex justify-center items-center flex-col'>
                        <h2 className='text-[#1C1C1C] font-medium text-[28px] sm:text-[25px] md:text-[25px] lg:text-[28px] text-center'>Ready to Get Started?</h2>
                        <p className='text-[#0A0A0A] text-[16px] mt-[15px] sm:w-[90%] lg:w-full text-center'>Join our waitlist or book a demo to see DSYNEER in action.</p>
                        <div className="flex items-center text-[15px] space-x-5 text-[#1C1C1C] pl-[40px] mt-[25px]">
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-[#6B3E26] text-white rounded-[9px] px-[22px] py-[11px] font-[10px]">Book a Demo</button></a>
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-white text-[#6B3E26] border-[#6B3E26] border-2 rounded-[9px] px-[22px] py-[11px] font-[10px]">Join Waitlist</button></a>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}
export default Contacts