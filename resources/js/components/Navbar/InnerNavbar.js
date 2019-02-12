import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link ,NavLink} from 'react-router-dom';
import './InnerNavbar.css'


export default class InnerNavbar extends Component {

    render() {
        return (
            <div id="inner_nav">

                <nav id="navbar" className="my-nav navbar navbar-expand-lg navbar-dark sticky-top">
                    <div className="container">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link to="/" className="navbar-brand"> GradProj </Link>
                        <ul className="navbar-nav ml-auto dir-ar">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link"> الرئيسية <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link"> خدماتنا <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/project-ideas" className="nav-link"> أفكار مشاريع <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/who-we-are" className="nav-link"> من نحن <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link"> تواصل معنا <span className="sr-only">(current)</span> </NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>



            </div>
        );
    }
}