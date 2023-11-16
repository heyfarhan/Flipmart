import { Link } from "react-router-dom"

const BrandName = () => {
    return (
        <Link to='/'>

        <div className="mb-3 ml-1 md:m-3">
            <span className="text-xl font-logo font-bold italic text-white leading-3">Flipmart</span>
            <div className="flex gap-1">
                <span className="text-xs font-logo font-bold italic text-white leading-3">Explore</span>
                <span className="text-xs font-logo font-bold italic text-yellow leading-3">Plus</span>
            </div>
        </div>
        </Link>
    )
}
export default BrandName