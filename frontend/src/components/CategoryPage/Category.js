import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../../utils/config.js"
import Error from "../Error.js";
import ShimmerCard from "../Home/ProductSlider/ShimmerCard.js";
import Card from "../Home/ProductSlider/Card.js";

const Category = () => {
    let product = {}
    const [pg, setPg] = useState(1)
    const { cat } = useParams();
    const cats = Object.keys(config)
    const [productList, setProductList] = useState([]);
    const [max, setMax] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    if (productList !== null) {
    }
    useEffect(() => {
        setData(cat, config[cat]?.cat_id, pg);
    }, [])
    async function setData(cat, cat_id, pg) {
        try {
            setIsLoading(() => true)
            const res = await fetch(`${process.env.API_URL}/cat/?id=${cat_id}&page=${pg}`)
            const data = await res.json()
            product = data.result;
            if (!max) {
                setMax(() => data.length)
            }
            setProductList((e) => e.concat(product))
            setPg(prev => prev + 1)
            setIsLoading(() => false)
        }
        catch (err) {
            console.error('error : ', err);
        }
    }
    return (
        <div>
            {(cats.includes(cat)) ? (true &&
                <div className="flex items-center justify-center flex-col pb-5 bg-wwhite">
                    <h1 className="text-4xl capitalize font-bold text-blue font-logo mt-5">{config[cat].name}</h1>
                    <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-5 gap-y-6 gap-x-2">

                        {(productList != []) ?
                            (
                                productList.map((e, i) => {
                                    return <Card key={e.product_id + e.list_price + i} img={e.image_path_custom_820} name={e.product} price={e.price} list_price={e.list_price} pid={e.product_id} />
                                })

                            )
                            :
                            (true)
                        }
                        {(isLoading) ? (new Array(5).fill('1').map((key) => (true && <ShimmerCard />))) : (false)}

                    </div>
                    {(productList != [] && pg < (max / 10 + 1)) ? (
                        <button className="bg-[#247aa9] text-wwhite py-2 rounded-md font-medium px-3 text-base hover:brightness-110 z-10" onClick={() => {
                            setPg((e) => e + 1)
                            setData(cat, config[cat].cat_id, pg)

                        }
                        }>View More</button>
                    ) : (true)}
                </div>
            ) : (true && <Error />)
            }


        </div>
    )
}
export default Category