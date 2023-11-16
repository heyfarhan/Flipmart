import Card from "./Card";
import DealHeader from "./DealHeader";
import DealCard from "./DealCard";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import ShimmerCard from "./ShimmerCard";
const ProductSlider = ({ name, img, cat, list }) => {

    return (
        <div className="bg-wwhite py-1 md:py-0 relative">
            <img className="absolute z-[1] left-0 w-full bottom-0 md:hidden" src={img}></img>
            <DealHeader name={name} img={img} cat_id={cat} />
            <div className="" >
                <div className="h-[52vh] md:h-[25vh] lg:h-[20vh] xl:h-[30vh] w-full  md:flex gap-0 overflow-hidden px-6 md:px-0 z-10" id="slide">
                    <DealCard name={name} img={img} cat_id={cat} />
                    <div className="grid  gap-1 md:gap-1 grid-cols-2 h-[52.6725vh] md:h-[25vh] lg:h-[20vh] xl:h-[30.5vh] max-w-[full] md:flex md:overflow-scroll no-scrollbar relative" >
                        <PreviousButton />
                        {

                            (list == null || list[cat] == null || list[cat] == undefined) ? (new Array(10).fill('1').map((key) => (true && <ShimmerCard />))
                            ) : (true &&
                                <>
                                    {
                                        list[cat].map((e, n) => {
                                            if (n < 10) {
                                                return <Card key={e.product_id} img={e.image_path_custom_820} name={e.product} price={e.price} list_price={e.list_price} pid={e.product_id} />
                                            }
                                        })
                                    }
                                </>
                            )

                        }
                        <NextButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductSlider


