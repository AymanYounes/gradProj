import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link ,NavLink} from 'react-router-dom';
import './NavbarWithHero.css'


export default class NavbarWithHero extends Component {

    render() {
        return (
            <div id="main_nav">

                <nav id="navbar" className="my-nav navbar navbar-expand-lg navbar-light sticky-top">
                    <div className="container">
                    <Link to="/" className="navbar-brand"> GradProj </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto dir-ar">
                            <li className="nav-item ">
                                <NavLink exact to="/" className="nav-link"> الرئيسية <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link"> خدماتنا <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link"> أفكار مشاريع <span className="sr-only">(current)</span> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/who-we-are" className="nav-link"> من نحن <span className="sr-only">(current)</span> </NavLink>
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