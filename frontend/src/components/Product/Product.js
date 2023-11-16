import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ShimmerCard from "../Home/ProductSlider/ShimmerCard";
import ErrorPage from "../Error";
import UnderConst from "../Underconst";

const Product = () => {

    const [product, setProduct] = useState(null)
    const { product_id } = useParams();
    if (product != null) {

    }

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`${process.env.API_URL}/product/${product_id}`)
            const data = await response.json()
            console.log(data)
            setProduct(data)
        }
        getProduct()
    }, [])

    return (
        ((product != null) ? (true &&
            (product.product != undefined) ? (true &&
                <div className="flex flex-col bg-wwhite lg:px-20 px-4 sm:px-10">
                    <span className="text-xl md:text-2xl lg:text-3xl pb-2  pt-5 font-medium text-[#7b91ff] ">{product.product}</span>

                    <div className="flex h-[320px] overflow-scroll no-scrollbar my-2 w-[280px] sm:w-[320px] snap-x snap-always snap-mandatory self-center drop-shadow-lg rounded-md">

                        {
                            product.product_gallery.map((e, i) => {
                                return (

                                    <img className="snap-start object-contain " src={e.main_image} key={i} />
                                )
                            })

                        }
                    </div>
                    {(product.product_gallery.length > 1) ? (true && <div className="self-center">← swipe to view more images → </div>) : (true)


                    }

                    <h1 className="text-xl text-[blue]  self-center  mt-5">{" Price : ₹" + product.price}</h1>
                    <h1 className="text-md line-through text-[gray]  self-center">{"Price : ₹" + product.list_price}</h1>
                    <Link to='/underconst' className="self-center">

                        <button className="text-[1rem]  text-wwhite bg-blue px-4 py-3  mb-5 mt-3 rounded-sm md:rounded-md self-center">Shop Now</button>
                    </Link>
                    <div className="flex flex-col px-3 pb-8 pt-3 ">

                        <div className=" text-md font-medium">Description :</div>
                        <div className="flex gap-5 flex-col py-2 w-[100%] overflow-auto" dangerouslySetInnerHTML={{ __html: product.full_description }}></div>
                        <h1>{ }</h1>
                    </div>
                </div>
        ) : (true && <ErrorPage />)) : (true && <ShimmerCard />))

    )
}
export default Product