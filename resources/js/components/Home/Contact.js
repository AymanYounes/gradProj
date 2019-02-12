import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';
import Whatsapp from "./../../Assets/Images/whatsapp-ico.png";
import facebook from "./../../Assets/Images/facebook-ico.png";

export default class Contact extends Component {

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
            <div className="contact">
                <h1>تواصل معنا</h1>
                <div className="info">
                    <div className="header_under_line center"></div>
                </div>

                <div className="">
                    <form>
                        <h1>إذا أردت الإستفسار عن اى شئ فلا تتردد بالتواصل معنا</h1>

                        <div className="contact-num center">
                            <a href="https://web.whatsapp.com/send?phone=201144199331" target="_blank">
                                <img src={Whatsapp} width="50px"/>
                            </a>

                            <a href="https://www.facebook.com/برمجة-مشاريع-تخرج-247858535865473/" target="_blank">
                                <img src={facebook} width="50px"/>
                            </a>

                            <a href="tel:201144199331" target="_blank">
                                <span > 201144199331+</span>
                            </a>
                        </div>




                        <div className="contentform">
                            <div id="sendmessage"> Your message has been sent successfully. Thank you. </div>


                            <div className="">
                                <div className="form-group">
                                    <p>الإسم<span>*</span></p>
                                    <span className="icon-case"><i className="fa fa-male"></i></span>
                                    <input type="text" name="nom" id="nom" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Nom' doit être renseigné."/>
                                    <div className="validation"></div>
                                </div>

                                <div className="form-group">
                                    <p>البريد الإلكترونى <span>*</span></p>
                                    <span className="icon-case"><i className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" id="email" data-rule="email" data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire."/>
                                    <div className="validation"></div>
                                </div>


                                <div className="form-group">
                                    <p>رقم التليفون <span>*</span></p>
                                    <span className="icon-case"><i className="fa fa-phone"></i></span>
                                    <input type="text" name="phone" id="phone" data-rule="maxlen:10" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres"/>
                                    <div className="validation"></div>
                                </div>

                                <div className="form-group">
                                    <p>Message <span>*</span></p>
                                    <span className="icon-case"><i className="fa fa-comments"></i></span>
                                    <textarea className="message" rows="14" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Message' doit être renseigné."></textarea>
                                    <div className="validation"></div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="button-contact">إرسال</button>

                    </form>
                </div>
                <div className="col-sm-6"></div>
            </div>
        );
    }
}
