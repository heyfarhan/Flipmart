import { Link } from "react-router-dom"

const DealCard = (props) => {
    return (
        <Link to={'/cat/'+props.cat_id}>

        <div className='md:flex flex-col justify-center  bg-wwhite  gap-5 items-center px-3 py-1
        text-center hidden relative md:min-w-[26vw] md:max-w-[26vw] lg:min-w-[20vw] lg:max-w-[20vw] xl:min-w-[13.5vw] xl:max-w-[13.5vw] h-[25vh] md:h-[25vh] lg:h-[20vh] xl:h-[30vh] overflow-hidden'>
            <span className="text-[1.5rem] z-10 whitespace-normal">{props.name}</span>
            <button className="bg-blue text-wwhite py-2 rounded-sm font-medium px-3 text-xs hover:brightness-110 z-10 ">View More</button>
            <img src={props.img} className="absolute z-1 bottom-0"></img>
        </div>
        </Link>
    )
}
export default DealCard