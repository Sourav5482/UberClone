const Page2 = () => {
    return (
        <div className=" flex  flex-col lg:flex-row items-center lg:content-center md:pl-5
        mt-5 ">
            <div className=" hidden lg:flex lg:w-1/2 w-[80vw] h-[40%]">
                <img src="/images/Airport-Fall.webp" alt="fff" className="object-center w-[100%]" />
            </div>
            <div className="w-full h-[40%]   lg:w-1/2 pt-11 px-16 lg:px-24">
                <h1 className="text-black text-4xl font-semibold ">Drive when you want, make what you need</h1>
                 <h2 className="text-black text-lg mt-8 ">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</h2>
                 <button className="bg-black py-3 px-3 rounded-xl mt-8 inline">Get started </button>
                 <p className="text-black mt-5  text-lg a ">Already have an account? Sign in</p>
                 
            </div>
            <div className="lg:w-1/2 w-[80vw] h-[40%] lg:hidden mt-5 ">
                <img src="/images/Airport-Fall.webp" alt="fff" className="object-center w-[100%]" />
            </div>
            

        </div>
    );
};
export default Page2;