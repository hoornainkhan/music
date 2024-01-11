import React from 'react'
// import SearchBar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-black">
  <div className="container-fluid">
    <a href='/' className="navbar-brand">Mujic</a>
    <FontAwesomeIcon icon={faMusic} />
  </div>
</nav></div>
  )
}

export default Navbar;