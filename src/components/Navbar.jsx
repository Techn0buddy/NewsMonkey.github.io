import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const NavBar = () => {
//   static propTypes = {}

    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-warning fw-bolder" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    
                    <li className='nav-item'><NavLink to="/business"  className='nav-link'  aria-current="page" > Business </NavLink></li>
                    <li className='nav-item'><NavLink to="/entertainment"  className='nav-link'  aria-current="page" > Entertainment </NavLink></li>
                    <li className='nav-item'><NavLink to="/health"  className='nav-link'  aria-current="page"> Health </NavLink></li>
                    <li className='nav-item'><NavLink to="/science"  className='nav-link'  aria-current="page"> Science </NavLink></li>
                    <li className='nav-item'><NavLink to="/sports"  className='nav-link'  aria-current="page"> Sports </NavLink></li>
                    <li className='nav-item'><NavLink to="/technology"  className='nav-link'  aria-current="page"> Technology </NavLink></li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
  }

export default NavBar