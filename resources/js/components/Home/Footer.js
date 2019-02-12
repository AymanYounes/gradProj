import React, { Component } from 'react';
import './Footer.css';
import Ideas from "../Ideas/Ideas";
import Contact from "../Contact/Contact";
import Home from "./Home";
import Services from "../Services/Services";
import About from "../About/About";
import {BrowserRouter as Router , Link , Route} from 'react-router-dom';
import Whatsapp from "./../../Assets/Images/whatsapp-ico.png";
import facebook from "./../../Assets/Images/facebook-ico.png";


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
            <footer className="flex-rw">

                <ul className="footer-list-top">
                    <li>
                        <h4 className="footer-list-header">من نحن</h4></li>
                    <li>
                        <p className="footer_p generic-anchor footer-list-anchor">
                            نحن فريق من المبرمجين متخصصين فى مجالات برمجية عدة
                            ولدينا الخبرة العملية لأكثر من 10 أعوام فى مختلف مجالات البرمجة
                            من برامج مكتب ومواقع إلكترونية وتطبيقات موبايل...
                        </p>
                        <p className="footer_p generic-anchor footer-list-anchor">
                            نبدأ معك مشروعك من أول المساعدة على إختيار الفكرة الأفضل وعرض الأفكار المتاحة لدينا
                            من واقع خبرتنا وبدأ عمل المشروع نظريا وحتى إتمامه برمجياً ومساعدتك حتى يوم
                            المناقشة والتسليم فى كل ما يخص المشروع حتى تتمكن من اجتياز المناقشة بأعلى الدرجات

                        </p>
                    </li>

                </ul>

                <ul className="footer-list-top">
                    <li id='help'>
                        <h4 className="footer-list-header">روابط تهمك</h4></li>

                    <li>
                        <Link to="/" className="generic-anchor footer-list-anchor"> الرئيسية <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li>
                        <Link to="/services" className="generic-anchor footer-list-anchor"> خدماتنا <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li>
                        <Link to="/project-ideas" className="generic-anchor footer-list-anchor"> أفكار مشاريع <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li>
                        <Link to="/who-we-are" className="generic-anchor footer-list-anchor"> من نحن <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="generic-anchor footer-list-anchor"> تواصل معنا <span className="sr-only">(current)</span> </Link>
                    </li>


                </ul>

                <ul className="footer-list-top">
                    <li id='help'>
                        <h4 className="footer-list-header">تواصل معنا</h4>
                    </li>


                    <div className="contact-num center">
                        <a href="https://web.whatsapp.com/send?phone=201144199331" target="_blank">
                            <img src={Whatsapp} width="50px"/>
                        </a>

                        <a href="https://www.facebook.com/برمجة-مشاريع-تخرج-247858535865473/" target="_blank">
                            <img src={facebook} width="50px"/>
                        </a>
<br/>
<br/>
                        <a href="tel:201144199331" target="_blank">
                            <span > 201144199331+</span>
                        </a>
                    </div>


                </ul>
                <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      تواصل  <span className="footer-social-small">معنا</span>
      </span>
                    <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="https://www.facebook.com/برمجة-مشاريع-تخرج-247858535865473/" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook-official"></i> </a>
      <a href="https://web.whatsapp.com/send?phone=201144199331" className="generic-anchor" target="_blank" title="Whatsapp" itemProp="significantLink"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
      {/*<a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus"></i></a>*/}
      </span>
                </section>
                <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">
                        <i className="fa fa-copyright" role="copyright">

                        </i> 2019<span className="footer-bottom-rights"> - All Rights Reserved </span>
                    </div>
                </section>
            </footer>
        );
    }
}
