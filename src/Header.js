import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvide";
function Header() {

  const [ {basket} , dispatch ] = useStateValue ();
    return (
<nav class="navbar navbar-expand-lg navbar-light nav-color">
  <div class="container-fluid">
    <Link class=" active navbar-brand mx-3" to="/">FUMOMODO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <Link class="nav-link px-3" to="/">Home</Link>
          <Link class="nav-link px-3" to="/Men">Men</Link>
          <Link class="nav-link px-3" to="/Women">Women</Link>
          <Link class="nav-link px-3" to="/Accessories">Accessories</Link>
          
        </li>
        </ul>
        <div class="ml-auto mb-2 mb-lg-0 search-icons">
            <SearchIcon/>
            <AccountCircleIcon/>
            <Link to="/Cart">
            <div className="cart-box">
            <LocalMallIcon/>
            <span>{basket?.length}</span>
            </div>
            </Link>
            
        </div>
    </div>
  </div>
</nav>
        
    )
}

export default Header
