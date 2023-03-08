import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faHeadset, faShoppingCart,faAngleDown, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ():JSX.Element=>{
    return(
        <>
            <nav className='px-7 py-5 bg-slate-800 font-light hidden md:flex'>
                <div className='flex-1 w-1/5 text-lime-500'>Logo</div>
                <div className='flex-3 w-2/5'>
                    <form>
                        <input type="text" className='w-4/5 rounded-l h-8'/>
                        <button className='w-1/5 bg-lime-500 rounded-r h-8 text-white'>search</button>
                    </form>
                </div>
                <ul className='flex flex-2 w-2/5 justify-evenly text-white'>
                    <li><FontAwesomeIcon icon={faHeadset} size='xl' className='text-lime-500'/> <span className='text-sm hover:text-lime-500'> Support &nbsp;<FontAwesomeIcon icon={faAngleDown} /></span></li>
                    <li><FontAwesomeIcon icon={faShoppingCart} size='xl' className='text-lime-500'/> <span className='text-sm hover:text-lime-500'> Cart</span></li>
                    <li><FontAwesomeIcon icon={faUserAlt} size='xl' className='text-lime-500'/> <span className='text-sm hover:text-lime-500'> User</span></li>
                </ul>
            </nav>

            <nav className='px-7 py-5 bg-slate-800 font-light block md:hidden'>
                <div className='flex'>

                    <div className='flex-1 w-1/5 text-lime-500 mb-5'>
                        <FontAwesomeIcon icon={faBars}/>
                        <span className='ml-3'>
                            Logo
                        </span>
                    </div>
                    
                    <ul className='flex flex-2 w-2/5 justify-evenly text-white'>
                        <li><FontAwesomeIcon icon={faHeadset} size='xl' className='text-lime-500'/> <span className='text-sm hover:text-lime-500'> </span></li>
                        <li><FontAwesomeIcon icon={faShoppingCart} size='xl' className='text-lime-500'/> </li>
                        <li><FontAwesomeIcon icon={faUserAlt} size='xl' className='text-lime-500'/> </li>
                    </ul>
                </div>
                <div className='justify-center'>
                    <form>
                        <input type="text" className='w-5/6 rounded-l h-8'/>
                        <button className='w-1/6 bg-lime-500 rounded-r h-8 text-white'><FontAwesomeIcon icon={faSearch}/></button>
                    </form>
                </div>
            </nav>
        </>
    )
}
export default Navbar