import React, { useState } from 'react'
import '../styles/nav.css'
import ham from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import logo from '../assets/logo.svg'
const Nav=()=>{
    const[toggle , settoggle] = useState(false)
    const handletoggle=()=>{
        settoggle(!toggle)
    }
 
    return(
        <>
  <nav className="navbar navbar-expand-lg">
<a className="navbar-brand ml-5" href="/#">
    <img src={logo} alt="logo" />
  </a>
  <button className="navbar-toggler" onClick={handletoggle} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
   <img src={toggle ? close : ham} alt={toggle ? "close icon" : "open icon"} className="img-fluid"/>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mx-auto mt-2 mt-lg-0 py-3">
      <li className="nav-item active mr-3">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="/#">About</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="/#">Contact</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="/#">Blog</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="/#">Careers</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item mr-5">
        <button type="button" className="btn btn-primary btn-lg">Request Invite</button> 
        </li>
      </ul>

  </div>
</nav>
      </>
    )
}
export default Nav
