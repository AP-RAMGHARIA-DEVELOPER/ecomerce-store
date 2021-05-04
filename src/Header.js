import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
<nav class="navbar navbar-expand-lg navbar-light nav-color">
  <div class="container-fluid">
    <a class=" active navbar-brand mx-3" href="#">FUMOMODO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Home</a>
          <a class="nav-link px-3" href="#">Men</a>
          <a class="nav-link px-3" href="#">Women</a>
          <a class="nav-link px-3" href="#">Asserories</a>
        </li>
        </ul>
        <div class="ml-auto mb-2 mb-lg-0 search-icons">
            <SearchIcon/>
            <LocalMallIcon/>
            <AccountCircleIcon/>
        </div>
    </div>
  </div>
</nav>
        
    )
}

export default Header
