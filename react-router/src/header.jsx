import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
import Home from './home';
import About from './about';
import Contact from './contact';

function header(props) {

    const Menu = {'/home':'Home', '/about':'About', '/contact':'Contact'}
    const returnData = Object.entries(Menu).map((res,i)=>{
        return <li className="nav-item" key={i}>
          <Link className="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })



    return (
        <>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {returnData}
      </ul>
     
    </div>
  </div>
</nav>

<Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
</Routes>


</Router>
        </>
    );
}

export default header;