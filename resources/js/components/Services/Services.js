import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Services.css';
import services_icon from './../../Assets/Images/services_icon.jpg';
import Footer from './../Home/Footer';



export default class Services extends Component {

    constructor(){
        super();
        this.state = {
            services: []
        }
    }


    componentWillMount(){
        axios.get('/api/services').then(response => {
            this.setState({
                services: response.data
            });
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {

        return (
            <div>
            <div className="container">

                <div className="row after_header">
                    <img src={services_icon} width="100" height="100" />
                    <h1>
                        خدماتنا
                    </h1>
                    <p>
                        لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
                    </p>
                </div>

            </div>
                {/*<InnerNavbar />*/}
                {this.state.services.map(service =>
                    <div className= {"row direction_" +(service.id%2 ? 'r':'l')} key={service.id}>
                        <div className={"col-sm-6"}>
                            <img src = {require("./../../Assets/Images/"+service.image)} className="img-responsive"/>
                        </div>
                        <div className={"col-sm-6"}>
                            <h1>
                                <Link  to={"/services/"+ service.id}> {service.title} </Link>
                            </h1>
                            <p dir="rtl">
                                {service.description}
                            </p>

                        </div>
                    </div>
                )}
<Footer />
            </div>
        );
    }
}

