const Page3 = () => {
    return (
        <div className="flex  flex-col lg:flex-row items-center lg:content-center ">
            <div className="w-full h-[40%]   lg:w-1/2 pt-11 px-16 lg:px-24">
                <h1 className="text-black text-4xl font-semibold "> The Uber you know, reimagined for business</h1>
                 <h2 className="text-black text-lg mt-8 ">Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size..</h2>
                 <button className="bg-black py-3 px-3 rounded-xl mt-8">Get started</button>
                 <p className="text-black mt-5 text-lg a">Check out our solutions</p>
            
            </div>
            <div className="lg:w-1/2 w-[80vw]  h-[40%]  flex justify-center lg:bg-blue-50 mt-5">
                <img src="/images/3-2-ridesharing-new.png" alt="fff" className="object-center w-[100%]" />
            </div>
            

        </div>
    );
};
export default Page3;