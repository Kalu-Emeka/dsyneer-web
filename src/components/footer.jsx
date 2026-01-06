function Footer() {
    return (
        <>
            <div className="bg-[#6B3E26] sm:p-2 md:p-2 lg:p-4">
                <div className="grid grid-cols-3 gap-12 px-[30px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-4">
                    <div>
                        <div className="flex text-white">
                            <img className="w-[35%] mb-[20px] sm:w-[10%] md:w-[10%] lg:w-[10%] object-contain" src="/icons/Container.webp" alt="" />
                            <h2 className="mt-[7px] ml-[10px]">DSYNEER</h2>
                        </div>
                        <p className="text-[16px] text-gray-300 w-[90%]">Connecting diaspora clients with verified African fashion designers for perfect custom wear.</p>
                    </div>
                    <div>
                        <h1 className='mb-2 text-[50px] text-white sm:text-[17px] md:text-[19px] font-medium'>Quick Links</h1>
                        <div className="mt-[20px] flex flex-col space-y-4 text-[15px] text-gray-300">
                            <a href="/home">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/privacy">Privacy</a>
                            <a href="/terms">Terms</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='mb-2 text-[50px] text-white sm:text-[17px] md:text-[19px] font-bold'>Follow Us</h1>
                        <div className="">
                            <div className="flex mt-[10px]">
                                {/* <a className="w-[10%] mr-[10px] object-contain" href="" target="_blank"><img className="" src="/icons/Link.webp" alt="" /></a> */}
                                <a className="w-[10%] mr-[10px] object-contain" href="http://linkedin.com/company/dsyneer" target="_blank"><img className="" src="/icons/Link2.webp" alt="" /></a>
                                {/* <a className="w-[10%] mr-[10px] object-contain" href="" target="_blank"><img className="" src="/icons/Link3.webp" alt="" /></a> */}
                                <a className="w-[10%] mr-[10px] object-contain" href="" target="_blank"><img className="" src="/icons/fb.png" alt="" /></a>
                                <a className="w-[10%] object-contain" href="" target="_blank"><img className="" src="/icons/x.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[50px] bg-[#6B3E26] text-white">
                <hr/>  
            </div>
            <footer className="py-[20px] flex justify-center items-center bg-[#6B3E26] text-gray-300">&copy; 2025 DSYNEER. All rights reserved.</footer>
        </>
    )
}
export default Footer