import React from 'react'
import Logo from '../portfolio.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <div className="container">
                    
              <a className="navbar-brand" href="#"><h2 style={{color: "#FFA500"}}>Portolio</h2></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#about_me">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#skills">Skills <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Contacts <span className="sr-only">(current)</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              </nav>
         </div>
    )
}
export default NavBar;
