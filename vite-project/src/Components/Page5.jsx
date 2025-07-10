const Page5 = () => {
    return (
        <div className=" hidden  lg:flex w-full flex-col  bg-[#F6F6F6] p-16">
            <h1 className="text-black text-4xl font-bold pl-24  mb-10 " >It’s easier in the apps</h1>
            <div className="w-full flex justify-center  ">
                <div className="w-[40%] bg-white mr-5 flex">
                    <img className=" h-40 " src="/images/Final-Download-Uber-App.webp" alt=""/>
                    <div className="ml-2 flex flex-col justify-center ">
                        <h1 className="text-black text-2xl font-bold ">Download the Uber app</h1>
                        <h1 className="text-black">Scan to download</h1>
                    </div>
                   
                </div>
                <div className="w-[40%] bg-white mr-5 flex">
                    <img className=" h-40 " src="/images/Final-Download-Uber-App.webp" alt=""/>
                    <div className="ml-2 flex flex-col justify-center ">
                        <h1 className="text-black text-2xl font-bold ">Download the Driver app</h1>
                        <h1 className="text-black">Scan to download</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page5;