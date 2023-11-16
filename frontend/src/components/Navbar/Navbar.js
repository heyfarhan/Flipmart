import beauty from '../../img/nav-img/beauty.png';
import electronics from '../../img/nav-img/electronics.png';
import furniture from'../../img/nav-img/furniture.png';
import mobiles from '../../img/nav-img/mobiles.png';
import fashion from '../../img/nav-img/fashion.png';
import kitchen from '../../img/nav-img/kitchen.png';
import topdeals from '../../img/nav-img/top-deals.png';
import ProductCategory from './ProductCategory';
import config from '../../utils/config'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cats=Object.values(config)
    return (
        <div className=''>
            <div className='flex text-xs leading-3  font-medium text-center gap-6
             p-2 md:gap-8 xl:gap-20 md:justify-center overflow-scroll no-scrollbar
             bg-wwhite'>
                <Link to='/cat/topdeals'>
                    <ProductCategory name="Top Deals" img={topdeals} key={config[0]}/>
                    </Link>
                <Link to='/cat/mobiles'>
                <ProductCategory name="Mobiles" img={mobiles} key={config[1]}/>
                    </Link>
                <Link to='/cat/electronics'>
                <ProductCategory name="Electronics" img={electronics} key={config[2]}/>
                    </Link>
                <Link to='/cat/beauty'>
                <ProductCategory name="Beauty" img={beauty} key={config[3]}/>
                    </Link>
                <Link to='/cat/fashion'>
                <ProductCategory name="Fashion" img={fashion} key={config[4]}/>
                    </Link>
                <Link to='/cat/furniture'>
                <ProductCategory name="Furniture" img={furniture} key={config[5]}/>
                    </Link>
                <Link to='/cat/home&kitchen'>
                <ProductCategory name="Home & Kitchen" img={kitchen} key={config[6]}/>
                    </Link>
            </div>
        </div>

    );
}
export default Navbar;
