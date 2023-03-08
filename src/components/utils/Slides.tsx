import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import menFashion from './images/menfashion.webp';
import electronics from './images/electronics.webp';
import fashion from './images/fashion.webp';

const Slides = ():JSX.Element=>{

    const responsive = {
        desktop:{
            breakpoint:{max:2000,min:1024},
            items:3,
            SlidesToSlide:3
        },
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2,
            SlidesToSlide:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1,
            SlidesToSlide:1
        },
    }
    return(
        <>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} arrows={false}>
                <div>
                    <img className="rounded" src={fashion} alt="carousel image one" />
                </div>
                <div>
                    <img className="rounded" src={electronics} alt="carousel image two" />
                </div>
                <div>
                    <img className="rounded" src={menFashion} alt="carousel image three" />
                </div>
            </Carousel>
        </>
    )
};

export default Slides;