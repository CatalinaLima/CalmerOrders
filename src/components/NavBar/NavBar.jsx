
import './NavBar.css'
import {Link} from 'react-router-dom'



export default function NavBar() {




    return (
        <nav className="NavBar">
            <ul className="nav-menu">
                <li className="logo">
                    <h2 className='calmer'>
                        <Link className='titulo' to="/">
                            CALMER
                        </Link>
                    </h2>
                </li>
            </ul>
        </nav>
        );
    }






