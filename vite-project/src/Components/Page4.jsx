const Page4 = () => {
    return (
        <div className=" flex  flex-col lg:flex-row items-center lg:content-center md:pl-5
        mt-5 ">
            <div className=" hidden lg:flex lg:w-1/2 w-[80vw] h-[40%]">
                <img src="/images/earner-illustra.webp" alt="fff" className="object-center w-[90%]" />
            </div>
            <div className="w-full h-[40%] lg:w-1/2 pt-11 px-16 lg:px-24">
                <h1 className="text-black text-4xl font-semibold ">Make money by renting out your car</h1>
                 <h2 className="text-black text-lg mt-8 ">Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools..</h2>
                 <button className="bg-black py-3 px-3 rounded-xl mt-8 ">Get started </button>
                
            </div>
            <div className="lg:w-1/2 w-[80vw] h-[40%] lg:hidden mt-5 ">
                <img src="/images/earner-illustra.webp" alt="fff" className="object-center w-[90%]" />
            </div>
            

        </div>
    );
};
export default Page4;