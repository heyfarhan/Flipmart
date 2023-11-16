import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <Link className="flex items-center justify-center" to={'/product/' + props.pid}>

            <div className="z-[2] mt-[1.5px] bg-wwhite snap-start h-[25vh]  overflow-hidden md:h-[24.8vh] lg:h-[19.8vh] xl:h-[29.8vh]  
        flex flex-col items-center gap-[4px] text-[0.8rem] 
        md:min-w-[25.5vw] lg:min-w-[19.5vw] xl:min-w-[11.3vw] md:max-w-[25.5vw] lg:max-w-[19.5vw] xl:max-w-[11.3vw] shadow-[2px_1px_8px_rgb(0,0,0,0.2)] md:shadow-none rounded-md relative 
        md:border-solid md:border-[1.8px] md:border-[#9797ff] justify-center">
                <img className="h-[35%] sm:h-[45%] sm:my-4 my-1 " src={props?.img}></img>

                <div className=" mb-2 text-center flex flex-col h-20 md:px-2 px-[2px]">
                    <span className="text-center font-medium overflow-hidden h-[2.4rem]">{props?.name?.slice(0, 36) + "..."}</span>
                    <div className="flex items-center justify-evenly pt-4 md:pt-1">

                        <div className="flex flex-col mt-1  items-baseline gap-0">
                            <span className="text-[0.9rem] text-[red] font-medium leading-3">{"₹" + props?.price}</span>
                            <span className="text-[0.6rem] text-gray font-medium line-through">{"₹" + props?.list_price}</span>
                        </div>
                        <span className="text-[0.7rem] sm:text-[0.9rem] text-wwhite bg-blue px-1.5 sm:py-1 flex items-center rounded-sm md:rounded-md h-[100%]">Shop Now</span>
                    </div>
                </div>
            </div>

        </Link>
    )
}
export default Card