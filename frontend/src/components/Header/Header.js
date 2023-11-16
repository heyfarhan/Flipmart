import BrandName from "./BrandName";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import BecomeSeller from "./BecomeSeller";
import More from "./More";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
const Header = () => {

    return (
        <div className="bg-blue h-[6.5rem] md:h-14 flex lg:justify-center items-center relative w-full">
            <div className="flex md:items-center md:content-center md:gap-0 flex-col md:flex-row mx-1 max-[768px]:w-full">
              
            <BrandName/>
            <SearchBar/>

            <HamburgerMenu/>
            </div>

            <div className=" items-center content-center hidden lg:flex">
                <LoginButton/>
            <BecomeSeller/>
            <More/>
            <Cart/>
            </div>
        </div>
    )
}
export default Header;