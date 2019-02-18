import React, { Component } from 'react';
import './Footer.css';
import logo from "./../../Assets/Images/grade-logo.png";


export default class Statistics extends Component {

    constructor(){
        super();

        this.state = {
            services: [],
            projects: [],
            statistics: []
        }

    }

    componentDidMount(){

    }

    render() {
        return (

            <React.Fragment>

                <div className="social-sec">
                    <div className="footer-facebook-btn align-content-center ">

                        <p className={"align-self-center footer-btn-p"}>
                            <i className={"fa fa-facebook text-white align-self-center "}></i>
                            <span className={" text-white"}>facebook</span>
                        </p>
                    </div>

                    <div className="footer-whatsapp-btn align-content-center ">

                        <p className={"align-self-center footer-btn-p"}>
                            <i className={"fa fa-whatsapp text-white align-self-center "}></i>
                            <span className={" text-white"}>whatsapp</span>
                        </p>
                    </div>
                </div>
            <footer className={"mt-0"}>

                <div className="row align-content-start pt-2">
                    <div className="col center align-self-center">
                        <img src={logo} width={'100px'} />
                    </div>
                    <div className="col center align-self-center">
                        <p> Made with love by: <br/>
                            <a href={"http://aymanyounis.com"} className={'text-dark'}> &copy; Ayman younes</a>
                        </p>
                    </div>
                    <div className="col center align-self-center">
                        <p>
                            <i className={"fa fa-phone"}></i> <a href={"tel:201144199331"} className={'text-dark'}>+20 114 419 9331</a> <br/>
                            <i className={"fa fa-envelope"}></i> <a href={"mail:webheadplayer@gmail.com"} className={'text-dark'}> webheadplayer@gmail.com </a>
                        </p>
                    </div>
                    <div className="col center align-self-center">
                        <p>
                            <a href={'https://facebook.com'}><i className={"text-body fa fa-facebook fa-2x p-3"}></i></a>
                            <a href={'https://google.com'}><i className={"text-body fa fa-google fa-2x p-3"}></i></a>
                            <a href={'https://whatsapp.com'}><i className={"text-body fa fa-whatsapp fa-2x p-3"}></i></a>
                        </p>
                    </div>
                </div>

            </footer>

            </React.Fragment>
        );
    }
}
