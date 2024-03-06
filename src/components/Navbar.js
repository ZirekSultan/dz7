import React from 'react';
import {Link} from "react-router-dom-v5-compat";


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav'>

                <li className='text-nav'>
                    <Link to={'/cards'}>
                        <h1>Cards</h1>
                    </Link>
                </li>
                <h1>
                    Homework 7
                </h1>
                <li>
                    <Link to={'/createCards'}>
                        <h1>CreateCards</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;