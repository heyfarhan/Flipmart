import { Link } from "react-router-dom"
import UnderConst from "../Underconst"

const More = () => {
    return (
        <Link to='/underconst'>
        
        <div className="group relative">
            <label htmlFor="more">
                <div className="gap-1  px-2 md:px-0 md:mx-7 flex  text-center items-center justify-center content-center" >
                    <span className="text-base font-logo font-semibold text-white leading-3">More</span>
                    <div className=" fill-white text-xs font-medium lg:group-hover:rotate-180 duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></div>
                </div>
            </label>
            <input  type="checkbox" id="more" className="hidden peer/more"></input>
            <div className=" hidden lg:group-hover:block lg:absolute md:top-2 md:left-0 w-56 h-30  drop-shadow-md p-2 z-10  peer-checked/more:flex" >
                <svg className="fill-wwhite  text-4xl  absolute left-10 top-1 drop-shadow-md lg:flex hidden" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                <ul className=" gap-1 leading-8 lg:divide-y lg:divide-gray  lg:p-2 rounded-md lg:bg-wwhite w-48 lg:absolute lg:top-6  lg:grid text-center mt-3 lg:mt-0">

                    <li className="">Notification Preferences</li>
                    <li className="">24x7 Customer Care</li>
                    <li className="">Download App</li>
                    <li className="">Advertise</li>
                </ul>
            </div>
        </div>
        </Link>
    )
}
export default More