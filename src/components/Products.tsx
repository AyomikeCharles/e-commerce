import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import { useParams } from "react-router-dom";
import Products from "../res/products";
import ProductSlide from "./utils/ProductSlide";



const Product = ():JSX.Element =>{

    let  productId = useParams();
    let value = productId.productId;
    let proId = parseInt(value as string);
    console.log(proId)
    
    return(
        <>
            <Navbar/>
            <section className="p-10 flex">
                <div className="basis-1/3">
                    <ProductSlide>
                        <div>
                            <img className="rounded w-100" src={Products[proId-1].picture1} alt="carousel image one" />
                        </div>
                        <div>
                            <img className="rounded w-100" src={Products[proId-1].picture1} alt="carousel image two" />
                        </div>
                        <div>
                            <img className="rounded w-100" src={Products[proId-1].picture1} alt="carousel image three" />
                        </div>
                    </ProductSlide>
                </div>
                <div className="basis-2/3">

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Product;