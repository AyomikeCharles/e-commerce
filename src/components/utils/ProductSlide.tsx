import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type props = {
    children:React.ReactChild[] | undefined
}

const ProductSlide = ({children}:props):JSX.Element=>{

    return(
        <>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={true}>
                {children}
            </Carousel>
        </>
    )
};

export default ProductSlide;