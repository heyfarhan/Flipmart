import BrandName from "./BrandName";
import LoginButton from "./LoginButton";
import BecomeSeller from "./BecomeSeller";
import More from "./More";
import Cart from "./Cart";

const HamburgerMenu = () => {
    return (
        <div className="">

            <label htmlFor="hamburger" className="lg:hidden absolute right-[1.8vw] min-[550px]:right-[2vw]  top-[.8rem] fill-wwhite peer-checked/menu:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.6rem]" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </label>
            <input type="checkbox" id="hamburger" className="peer/menu hidden"></input>
            <div className="z-30 absolute hidden  peer-checked/menu:block  top-0 left-0 w-full bg-blue text-white ">
                <div className="flex flex-col mx-4 mt-2.5">
                    <BrandName />
                    <label htmlFor="hamburger" className=" z-40  absolute right-[1.8vw] min-[550px]:right-[2vw]  top-[.8rem] fill-wwhite  ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.6rem" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </label>
                    <div className="flex flex-col gap-6 pt-5 pb-8 items-center justify-center">
                        <LoginButton />
                        <Cart />
                        <More />
                        <BecomeSeller />

                    </div>


                </div>
            </div>
        </div>
    )
}
export default HamburgerMenu