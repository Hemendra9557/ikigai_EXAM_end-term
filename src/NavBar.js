import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';


// Your React component code here


const NavBar = () => {
  return (
    <Fragment>
        <nav className='nav'>
            <a href='/' className='site-title'>Examinaton</a>
            <ul>
                <li>  
                    <Link to='/'>To-Do List</Link>
                </li>
                <li>
                    <Link to='/calculator'>Calculator</Link>  
                </li>
       
            </ul>
        </nav>
    </Fragment>
  )
}

export default NavBar
