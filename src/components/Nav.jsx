import { Link } from 'react-router-dom';
import { NavStyle } from "../css/NavStyle";

const Nav =()=>{
    return(
     <NavStyle>
        <div className='nav'>
            <Link to='/'><h1 className='link'>Home</h1></Link>
            <Link to='/Musicas'><h1 className='link'>Músicas</h1></Link>
            <Link to='/Login'><h1 className='link'>Login</h1></Link>
        </div>
     </NavStyle>
    )
}
export default Nav
