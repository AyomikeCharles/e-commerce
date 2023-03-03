import Navbar from "./utils/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faPersonDress, faChildDress, faShoePrints, faCar, faPhone, faTelevision, faGamepad, faGolfBall, faTimesCircle,faHeartPulse, faWalking, faBook, faClock, faRadio} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import SlideShow from "./utils/Carousel";
import gadgetImg from './utils/images/gadget.jpg';
import freedv from './utils/images/freedv.jpeg';
import Slides from "./utils/Slides";

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
                        <li><h4>Categories</h4></li>
                        <li className="my-2 hover:font-bold flex" onMouseEnter={showCatDetails} onMouseLeave={hideCatDetails}> <FontAwesomeIcon className="basis-1/4" icon={faPersonDress}/> <div className="basis-3/4"> Women Fashion</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faTshirt}/> <div className="basis-3/4"> Men Fashion</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faChildDress}/> <div className="basis-3/4"> Child flexren Fashion</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faShoePrints}/> <div className="basis-3/4"> Shoes</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faPhone}/> <div className="basis-3/4"> Phones And Laptops</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faTelevision}/> <div className="basis-3/4"> Consumer Electronics</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faGamepad}/> <div className="basis-3/4"> Klds Toys</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faGolfBall}/> <div className="basis-3/4"> Sports</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faClock}/> <div className="basis-3/4"> Wrist Watch</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faHeartPulse}/> <div className="basis-3/4"> Health Care</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faWalking}/> <div className="basis-3/4"> Lifestyle</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faBook}/> <div className="basis-3/4"> Books</div></li>
                        <li className="my-2 hover:font-bold flex"> <FontAwesomeIcon className="basis-1/4" icon={faRadio}/> <div className="basis-3/4"> Home Appliance</div></li>
                    </ul>

                    
                </div>

                

                <div className="relative basis-4/5 xl:basis-3/5">
                {
                        showCatInfo?
                        <div className="bg-white absolute z-20 -left-10 top-0 w-[103%] h-full rounded drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)]">
                            test
                        </div>:
                        null
                }
                        <div className="mb-5">
                            <SlideShow></SlideShow>
                        </div>
                        <div className="w-[44rem]">
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
            </div>
        </>
    )
}
export default Home