import Navbar from "./utils/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import SlideShow from "./utils/Carousel";
import gadgetImg from './utils/images/gadget.jpg';
import freedv from './utils/images/freedv.jpeg';
import Slides from "./utils/Slides";
import Categories from "../res/categories";
import Products from "../res/products";
import Footer from "./utils/Footer";
import { Link } from "react-router-dom";

const Home = ():JSX.Element=>{

    const [showCatInfo, setShowCatInfo] = useState<boolean>(false)


    const showCatDetails = ():void=>{
        setShowCatInfo(true)
    }

    const hideCatDetails = ():void=>{
        setShowCatInfo(false)
    }
    return(
        <>
            <Navbar/>
            <section className="px-5 py-10 hidden lg:flex">

                <div className="basis-2/5 xl:basis-1/5 mr-5">
                    <ul className="bg-lime-500 rounded py-5">
                        <li><h4 className="ml-5 font-semibold text-xl">Categories</h4></li>
                        
                        {
                            Categories.map((cats,i)=> (
                                <li key={cats.id} className="my-2 hover:font-bold flex" onMouseEnter={showCatDetails} onMouseLeave={hideCatDetails}><FontAwesomeIcon icon={cats.icon} className="basis-1/4"/><div className="basis-3/4">{cats.name}</div></li>
                            ))
                        }
                        
                    </ul>

                    
                </div>

                

                <div className="relative basis-4/5 xl:basis-3/5">
                {
                        showCatInfo?
                        <div className="bg-white absolute z-20 -left-10 top-0 w-[107%] h-full rounded drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)]">
                            test
                        </div>:
                        null
                }
                        <div className="mb-5">
                            <SlideShow></SlideShow>
                        </div>
                        <div className="w-[40rem] laptop:w-[44rem]">
                            <Slides></Slides>
                        </div>

                </div>

                <div className="basis-1/5 ml-5 rounded hidden xl:block">
                    <div>
                        <div>
                            <img className="rounded-t h-1/2" src={freedv} alt=''/>
                        </div>
                        <div>
                            <img className="rounded-b mb-2" src={gadgetImg} alt=''/>
                        </div>            
                    </div>
                </div>
            </section>
            <div className="block my-5 lg:hidden">
                <Slides></Slides>
                <div className="mt-10">
                    <div className="grid grid-cols-4 gap-3 mx-2">
                        <div className="text-center">
                            <div className="bg-lime-500 px-1 py-2 rounded">
                                <FontAwesomeIcon icon={faList}/>
                            </div>
                                all categories
                        </div>
                    {
                        Categories.map((cats)=>{
                            if(cats.id <= 7 ){
                                return(
                                    <div className="text-center" key={cats.id}>
                                        <div className="bg-lime-500 px-1 py-2 rounded"><FontAwesomeIcon icon={cats.icon}/></div>
                                        {cats.name}
                                    </div>
                                )
                            }
                            
                        })
                    }
                    </div>
                </div>
            </div>

            <div className="mx-3 md:mx-10">
                <div className="m-3 text-lg font-bold">Products</div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-7 mx-3">
                    {Products.map((product)=>(
                        
                        <Link key={product.id} to={`/product/${product.id}`}>
                        
                            <div  className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full h-48" src={product.picture1} alt="Sunset in the mountains"/>
                                <div className="p-2">
                                    <div className="text-lg">{product.name}</div>
                                    <div className="text-md">{product.price}</div>
                                    <p className="text-gray-700 text-base">
                                        {product.shortDescription}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home

