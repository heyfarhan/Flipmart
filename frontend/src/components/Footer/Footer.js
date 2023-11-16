import { Link } from "react-router-dom"
import UnderConst from "../Underconst"

const Footer = () => {
    return (
        <div className="">
            <Link to='/underconst'>

            <div className="hidden xl:flex text-sm ">

                <div className="flex  bg-[#172337] gap-20 w-[65vw] justify-center pt-5">

                    <div className=" p-5 text-white text-sm flex gap-2 flex-col">
                        <span className="text-gray">ABOUT</span>
                        <ul className="flex flex-col gap-1">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Flipmart Stories</li>
                            <li>Press</li>
                            <li>Flipmart Wholesale</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div className=" p-5 text-white text-sm flex gap-2 flex-col">
                        <span className="text-gray">Help</span>
                        <ul className="flex flex-col gap-1">
                            <li>Payment</li>
                            <li>Shipping</li>
                            <li>Cancelation & Returns</li>
                            <li>FAQ</li>
                            <li>Report Infringement</li>
                        </ul>
                    </div>


                    <div className=" p-5 text-white text-sm flex gap-2 flex-col">
                        <span className="text-gray">Consumer Policy</span>
                        <ul className="flex flex-col gap-1">
                            <li>Cancelation & Returns</li>
                            <li>Terms of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>Grievance Redressal</li>
                            <li>EPR Compliance</li>
                        </ul>
                    </div>





                    <div className=" p-5 text-white flex gap-2 flex-col">
                        <span className="text-gray">SOCIAL</span>
                        <ul className="flex flex-col gap-1">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[35vw] flex bg-[#172337] gap-16 pr-10 pt-5">

                    <div className=" py-5 text-white text-sm flex flex-col gap-2">
                        <span className="text-gray block">Mail Us:</span>
                        <span>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</span>
                    </div>
                    <div className=" py-5 text-white text-sm flex flex-col gap-2" >
                        <span className="text-gray block">Registered Office Address:</span>
                        <span>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</span>
                        <span className="block">CIN : U51109KA2012PTC066107</span>
                        <span className="block">Telephone: 044-45614700</span>
                    </div>
                </div>
            </div>
        </Link>
            <div className="bg-[#172337] p-4 flex items-center justify-center text-white gap-6 xl:gap-16 flex-col xl:flex-row">

                <Link to='/underconst'>
                    <div className="flex items-center content-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" className="fill-[orange]" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
                        <span className="text-base">Become a Seller</span>
                    </div>
                </Link>
                <Link to='/underconst'>

                    <div className="flex items-center content-center gap-3">
                        <div className="bg-[orange] rounded-full py-[3px] px-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#172337]" height="0.8em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                        </div>
                        <span className="text-base">Advertise</span>
                    </div>
                </Link>
                <Link to='/underconst'>
                    <div className="flex items-center content-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" className="fill-[orange]" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>
                        <span className="text-base">Gift Cards</span>
                    </div>
                </Link>
                <Link to='/underconst'>
                    <div className="flex items-center content-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" className="fill-[orange]" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                        <span className="text-base">Help</span>
                    </div>
                </Link>
                <div className="flex items-center content-center gap-2">
                    <span className="text-[1.2rem]">&copy;</span>
                    <span className="text-base">Flipmart 2023</span>
                </div>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" className="hidden xl:inline-flex"></img>
            </div>
            <div className="text-center bg-[#0e1829] text-white leading-8 p-2 font-sans font-medium xl:text-lg text-sm">
                Made with ❤️ By FARHAN AHMED &copy; 2023

            </div>
            <div className="text-center bg-[#0a101a] text-white leading-3 p-2 font-sans   text-sm">
                This Website is Made Only for Educational Purpose

            </div>
        </div>
    )
}
export default Footer