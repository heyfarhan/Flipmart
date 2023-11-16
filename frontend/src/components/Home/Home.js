import Slider from "./Slider";
import ProductSlider from "./ProductSlider/ProductSlider";
import OffersPanel from "./OffersPanel/OffersPanel";
import { useEffect, useState } from "react";
import config from '../../utils/config';
import getData from "../../utils/getData.mjs";

const Home = () => {

    let product = {}
    const [productList, setProductList] = useState(null);
    useEffect(() => {
        Object.keys(config).map((e) => {
            setData(e, config[e].cat_id);
        })

    }, [])
    async function setData(cat, cat_id) {
        try {
            const data = await getData(cat, cat_id)
            product = { ...product, [cat]: data.result };
            setProductList(product);
        }
        catch (err) {
            console.error('error : ', err);
        }
    }

    return (
        <div className="flex flex-col gap-2 select-none">
            <Slider />
            <ProductSlider name="Today's Top Deals" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" cat='topdeals' list={productList} />
            <ProductSlider name="Hottest Deals on Mobiles" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" cat='mobiles' list={productList} />
            <OffersPanel img={["https://rukminim2.flixcart.com/fk-p-flap/960/960/image/0b7b9d87eccefd31.png?q=50", "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/7a29d4b80fc246d9.jpg?q=50"]} />
            <ProductSlider name="Best of Electronics" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/964e5530abdf3180.jpg" cat='electronics' list={productList} />
            <ProductSlider name="Pick Your Styles" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90" cat='fashion' list={productList} />
            <OffersPanel img={["https://rukminim2.flixcart.com/fk-p-flap/960/960/image/1196183c68f09558.jpg?q=50", "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/5a82189aa8558364.jpg?q=50"]} />
            <ProductSlider name="Furniture, Home Decor and More" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90" cat='furniture' list={productList} />
            <ProductSlider name="Beauty and More" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/fb57b447c8eefb65.jpg" cat='beauty' list={productList} />
            <OffersPanel img={["https://rukminim2.flixcart.com/fk-p-flap/960/960/image/b3e96d57da068ee6.jpg?q=50", "https://rukminim2.flixcart.com/fk-p-flap/960/960/image/30bba70ac5f43faa.jpg?q=50"]} />
            <ProductSlider name="Home & Kitchen Essentials" img="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90" cat='home&kitchen' list={productList} />
        </div>
    );
}
export default Home
