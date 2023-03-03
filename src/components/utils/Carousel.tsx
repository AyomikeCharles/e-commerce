import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import menFashion from './images/menfashion.webp';
import electronics from './images/electronics.webp';
import fashion from './images/fashion.webp';

const SlideShow = ():JSX.Element=>{
    return(
        <>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img className="rounded h-full" src={fashion} alt="carousel image one" />
                </div>
                <div>
                    <img className="rounded h-full" src={electronics} alt="carousel image two" />
                </div>
                <div>
                    <img className="rounded h-full" src={menFashion} alt="carousel image three" />
                </div>
            </Carousel>
        </>
    )
};

export default SlideShow;