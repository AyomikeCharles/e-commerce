const Footer = ():JSX.Element=>{
    return(
        <>
            <footer className="mt-10">
                <div className="block md:flex bg-gray-600 p-10 text-white">
                    <div className="basis-3/5">
                        <ul>
                            <li className="text-lime-500 text-xl font-bold my-2">Newsletter:::</li>
                            <li className="my-2">Get the Latest oraimo News and Giveaways</li>
                            <li className="my-2 w-4/5">
                                <form>
                                    <input type="text" className='w-4/5 rounded-l h-8' placeholder="Enter your email address"/><input type="submit" className='w-1/5 bg-lime-500 rounded-r h-8 text-white' value="Subscribe"/>
                                </form>
                            </li>
                            <li className="my-2">SERVICE HOURS: Monday-Friday 9AM to 8PM</li>
                            <li className="my-2">CUSTOMER SERVICE: +234 818 135 3103（First Choice）    +234 809 604 0753</li>
                            <li className="my-2">Whatsapp: +234 901 627 9193 +234 818 642 3337</li>
                        </ul>
                    
                    

                        
                    </div>
                    <div className="basis-1/5">
                        <ul>
                            <li className="text-lime-500 text-xl font-bold my-2">About oraimo:::</li>
                            <li className="my-2">About Us</li>
                            <li className="my-2">Where to Buy</li>
                            <li className="my-2">Special Offer</li>
                        </ul>
                    </div>
                    <div className="basis-1/5">
                        <ul>
                            <li className="text-lime-500 text-xl font-bold my-2">Terms:::</li>
                            <li className="my-2">Warranty</li>
                            <li className="my-2">Order & Shipping</li>
                            <li className="my-2">Replacement & Refund</li>
                            <li className="my-2">Terms & Conditions</li>
                            <li className="my-2">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="basis-1/5">
                        <ul>
                            <li className="text-lime-500 text-xl font-bold my-2">Get Help:::</li>
                            <li className="my-2">Visit Carlcare</li>
                            <li className="my-2">Track Your Order</li>
                            <li className="my-2">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-black text-white text-center p-10">
                    All left reserve

                </div>
            </footer>
        </>
    )
}
export default Footer;