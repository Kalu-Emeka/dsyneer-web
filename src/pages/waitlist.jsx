import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function Waitlist () {
    return (
        <>
            <Navbar/>
            <section className='bg-[#FFFDF9]'>
                    <div className="header pt-[140px] pr-[100px] pb-[30px] pl-[80px] text-black bg-[#FFFFFF] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center flex-col text-center'>
                            <img className='w-[1.5%] absolute left-[584px] top-[46%] sm:w-[4%] lg:w-[1.5%] sm:top-[40%] lg:top-[46%] sm:left-[150px] lg:left-[584px]' src="/icons/Icon.webp" alt="" />
                            <button className='bg-[#FEF6E5] border border-[#FEF6E5] text-[14px] text-[#6B3E26] py-[7px] px-[15px] rounded-[20px] mb-[11px] pl-[40px]'>Limited Early Access</button>
                            <h2 className="mb-2 w-[48%] text-[50px] text-[#1C1C1C] font-normal sm:w-full md:w-full sm:text-[25px] md:text-[27px] lg:text-[40px]">Be Among the First to Try DSYNEER</h2>
                            <p className='text-[#0A0A0A] text-medium text-[17px] mb-7 sm:mt-[15px] md:mt-[15px] lg:mt-0 sm:text-[13.5px] lg:text-[15px]'>Join our exclusive waitlist to get early access, special perks, and updates when we launch.</p>
                        </div>
                    </div>  
                </div>
                <section>
                    <div className='grid grid-cols-2 gap-4 bg-white py-[40px] px-[40px] sm:px-[10px] md:px-[10px] lg:px-[40px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:ml-[20px] lg:ml-0'>
                        <div className='flex flex-col bg-white px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px]'>
                            <h2 className='text-[24px] pb-[20px]'>Why Join the Waitlist?</h2>
                            <p className='text-[15px]'>Early adopters get exclusive benefits and help shape the future of DSYNEER.</p>
                            <div className='flex mt-[20px]'>
                                <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                                <p>Early access to the platform before public launch</p>
                            </div>
                             <div className='flex mt-[20px]'>
                                <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                                <p>Exclusive discounts on your first orders</p>
                            </div>
                             <div className='flex mt-[20px]'>
                                <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                                <p>Priority Client support</p>
                            </div>
                             <div className='flex mt-[20px]'>
                                <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                                <p>Influence product features and development</p>
                            </div>
                             <div className='flex mt-[20px]'>
                                <img className='w-[4%] mr-[10px] object-contain' src="/icons/Container11.webp" alt="" />
                                <p>Join a community of fashion-forward individuals</p>
                            </div>
                             <div className='bg-[#6B3E26] text-white mt-[20px] px-[20px] py-[20px] rounded-[10px]'>
                                <h2 className='text-[17px] mb-[30px]'>🎯 Current Waitlist</h2>
                                <h2 className='text-[26px] mb-[20px]'>1,247+</h2>
                                <p className='text-[#C3B1A8]'>people ahead of you</p>
                            </div>
                        </div>
                         <div className='flex flex-col bg-white py-[20px] px-[30px] rounded-[15px] w-[90%] border shadow-sm'>
                            <h2 className='text-[24px] py-[20px]'>Join the Waitlist</h2>
                            <form action="" className='mt-[10px]'>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>Full Name</label>
                                    <input className='pl-[15px] py-[8px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]' type="text" placeholder='Enter your full name' />
                                </div>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>Email Address</label>
                                    <input className='pl-[15px] py-[8px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]' type="text" placeholder='your.email@example.com' />
                                </div>
                                <div className='flex flex-col mb-[5px]'>
                                    <label htmlFor="name" className='mb-[5px]'>I am a...</label>
                                    <select className='pl-[15px] py-[8px] mb-[10px] outline-none bg-[#EDEDED] text-[#717182] border-b rounded-[10px] text-[15px]'>
                                       <option value="" disabled default="Select your role">Select your role</option> 
                                       <option value="">Designer</option> 
                                       <option value="">Customer</option> 
                                    </select>
                                </div>
                                <button type="submit" className='w-full bg-[#B59F93] hover:bg-[#6B3E26] text-white py-[13px] rounded-[20px] mb-[20px]'>Join Waitlist</button>
                                <p className='mb-[20px] text-center text-[15px]'>By joining, you agree to receive updates from DSYNEER. We respect your privacy and won't spam you.</p>
                            </form>
                        </div>
                    </div>
                </section>
                <section className='mt-[10px] bg-white pt-[90px] pb-[70px]'>
                    <div className='flex justify-center items-center flex-col'>
                        <h2 className='text-[#1C1C1C] font-normal text-[28px] sm:text-[25px] md:text-[25px] lg:text-[28px]'>Trusted by Communities Worldwide</h2>
                        <div className='flex justify-between mt-[30px] w-[50%] sm:w-[90%] lg:w-[50%]'>
                            <div>
                                <h2 className='text-[#6B3E26] text-[27px] font-medium text-center'>500+</h2>
                                <p className='text-[#0A0A0A] text-[14px] mt-[5px]'>Verified Tailors</p>
                            </div>
                            <div>
                                <h2 className='text-[#6B3E26] text-[27px] font-medium text-center'>15+</h2>
                                <p className='text-[#0A0A0A] text-[14px] mt-[5px]'>Countries Served</p>
                            </div>
                            <div>
                                <h2 className='text-[#6B3E26] text-[27px] font-medium text-center'>98%</h2>
                                <p className='text-[#0A0A0A] text-[14px] mt-[5px]'>Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )
}
export default Waitlist