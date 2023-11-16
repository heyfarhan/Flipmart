import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerCard from '../components/Home/ProductSlider/ShimmerCard'
import Card from "./Home/ProductSlider/Card";


const SearchPage = () => {

  const { text } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [max, setMax] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {

    async function get() {
      setIsLoading(true);
      const res = await fetch(`${process.env.API_URL}/searchProduct/${text}?page=${page}`)
      const data = await res.json()
      setSearchResults((prev) => prev.concat(data.result))
      setMax(data.length)
      setIsLoading(false);
    }
    get()
  }, [page])

  useEffect(() => {

    async function get() {
      setIsLoading(true);
      const res = await fetch(`${process.env.API_URL}/searchProduct/${text}?page=${page}`)
      const data = await res.json()
      setSearchResults((prev) => data.result)
      setMax(data.length)
      setIsLoading(false);
    }
    get()
  }, [text])

  const renderProducts = () => {
    if (isLoading && searchResults.length == 0) {

      return (new Array(5).fill('1').map((key) => (true && <ShimmerCard />)));
    }

    if (searchResults.length === 0) {
      return <h1>Oops, no items matched your search.</h1>;
    }

    return (
      <>
        {
          searchResults.map((product, index) => (
            <Card key={product.product_id + product.list_price + index} img={product.image_path_custom_820} name={product.product}
              price={product.price} list_price={product.list_price} pid={product.product_id} />))



        }
        {(isLoading) ? (new Array(5).fill('1').map((key) => (true && <ShimmerCard />))) : (false)}
      </>
    );
  };

  return (
    <>
      <div className="px-10 py-5 w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-5 gap-y-6 gap-x-2 self-center bg-wwhite">
        {renderProducts()}
      </div>
      {(searchResults != [] && page < (max / 10)) ? (
        <div className='flex items-center justify-center pb-4'>
          <button className="bg-[#247aa9] text-wwhite py-2 rounded-md font-medium px-3 text-base hover:brightness-110 z-10" onClick={() => {
            setPage(prev => prev + 1)
          }
          }>View More</button></div>
      ) : (true)}
    </>
  );

};

export default SearchPage;