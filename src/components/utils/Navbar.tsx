import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ():JSX.Element=>{
    return(
        <>
            <nav className='flex'>
                <div className='flex-1 w-32'>Logo</div>
                <div className='flex-1 w-64'>
                    <form>
                        <input type="text"/>
                        <button>search</button>
                    </form>
                </div>
                <ul className='flex flex-1 w-32 justify-evenly'>
                    <li>support</li>
                    <li>cart</li>
                    <li>user</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar