const ShimmerCard = (props) => {
    return (
            <div className="z-[2] mt-1 bg-wwhite snap-start h-[25vh]  overflow-hidden md:h-[25vh] lg:h-[20vh] xl:h-[30vh]  
        flex flex-col items-center gap-1.5 text-[0.6rem] content-center justify-center  
        md:min-w-[25.5vw] lg:min-w-[19.5vw] xl:min-w-[11.3vw] md:max-w-[25.5vw] lg:max-w-[19.5vw] xl:max-w-[11.3vw] shadow-[2px_1px_8px_rgb(0,0,0,0.2)] md:shadow-none rounded-md">
            <div className="bg-[#e9e9e9] w-[70%] h-[50%] rounded-md animate-pulse ">
            </div>
                <div className="bg-white w-[70%] h-[1.2rem] rounded-md animate-pulse">
                </div>
                <div className="bg-white w-[70%] h-[1.1rem] rounded-md animate-pulse">
                </div>
                
            </div>
    )
}
export default ShimmerCard