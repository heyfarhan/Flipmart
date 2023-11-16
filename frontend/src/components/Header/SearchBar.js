import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function convertToHyphenSeparated(inputString) {
    return inputString.replace(/\s+/g, '-');
}

const SearchBar = () => {
    let navigate = useNavigate();
    const [searchText, setSearchText] = useState('');

    return (
        <div className=" md:mx-5 bg-wwhite  md:w-[45vw]  lg:w-[30vw] h-9 flex items-center rounded-sm   drop-shadow-lg ">
            <input placeholder="Search for Products, Brands and more.." className="md:text-sm text-xs font-logo font-medium h-9 w-full px-3 rounded-sm bg-wwhite outline-none" value={searchText} onChange={(e) => {

                setSearchText(e.target.value)
            }} onKeyDown={(e) => {
                if (e.key == 'Enter') {
                    navigate("/searchProduct/" + convertToHyphenSeparated(searchText));

                }
            }}></input>

            <Link to={"/searchProduct/" + convertToHyphenSeparated(searchText)} className=" h-full flex items-center">

                <svg className="fill-blue h-5 px-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </Link>
        </div>
    )
}
export default SearchBar