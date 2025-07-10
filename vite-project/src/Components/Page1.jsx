const Page1 = () => {
    return (
        <div className="flex  flex-col lg:flex-row items-center lg:content-center ">
            <div className="w-full h-[40%]    lg:w-1/2 pt-11 px-16 lg:px-24">
                <h1 className="text-black text-4xl font-semibold "> Log in to see your recent activity</h1>
                 <h2 className="text-black text-lg mt-8 ">View past trips, tailored suggestions, support resources, and more.</h2>
                 <button className="bg-black py-3 px-4 font-bold rounded-xl mt-8 hover:bg-[#333333]">Log in to your account </button>
                 <p className="text-black mt-5 text-lg a">Don’t have an Uber account? Sign up</p>
                 
            </div>
            <div className="lg:w-1/2 w-[80vw]  h-[40%]  flex justify-center lg:bg-blue-50 mt-5">
                <img src="/images/3-2-ridesharing-new.png" alt="fff" className="object-center w-[100%]" />
            </div>
            

        </div>
    );
};
export default Page1;