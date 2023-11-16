import { Link } from "react-router-dom"

const DealHeader = (props) => {
    return (
        <div className="px-6 py-2 flex justify-between content-center text-xs md:hidden relative">
            <span className="text-lg z-20">{props.name}</span>
            <Link to={'/cat/'+props.cat_id}>

            <button className="bg-blue p-2 px-2.5 fill-wwhite rounded-full hover:brightness-110 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 
                    0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </button>
                    </Link>
        </div>
    )
}
export default DealHeader