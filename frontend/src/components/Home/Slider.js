import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    
    return (
        <div className="">
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay>
        <a href="#">
          <div>
               <img className="max-w-full min-h-[16vh] object-cover" src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/5c5372e40f346400.jpg?q=50
"></img>
        
          </div>
        </a>
        <a href="#">
          <div>
               <img className="max-w-full min-h-[16vh] object-cover" src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/7587082c54d40b90.png?q=50"></img>
        
          </div>
        </a>
        <a href="#">
          <div>
               <img className="max-w-full min-h-[16vh] object-cover" src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/58ffd2fd90f0e2a1.png?q=50"></img>
        
          </div>
        </a>
        <a href="#">
          <div>
         <img className="max-w-full min-h-[16vh] object-cover" src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/ad6a7315ca388b0e.jpg?q=50"></img>
        
          </div>
        </a>

        
      </Carousel>
                
        </div>



    );
}
export default Slider