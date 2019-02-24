import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Footer from './../../Layouts/Footer';
import logo from './../../../Assets/Images/grade-logo.png';
import './About.css';



export default class About extends Component {

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

            <React.Fragment>
                <div className="hero-section d-flex">
                    <div className="container d-flex">
                        <h1 className={"inner_header_title align-middle align-self-center pt-5"}>إكتشف المزيد عن Gradproj</h1>
                    </div>
                </div>


                <div className="container">
                    <div className="row after_header">
                        <img src={logo} width="100" height="100" />
                        <h1 className={'align-self-center pr-2 '}>
                            من نحن
                        </h1>

                        <div className="col-sm-6">
                            <div className="about-header">
                                <img src={logo} width={"100%"}/>
                            </div>
                            <div className="about-desc">
                                <p>
                                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="about-header">
                                <img src={logo} width={"100%"}/>
                            </div>
                            <div className="about-desc">
                                <p>
                                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>



                <section id="stats" className="hero">
                    <div className="inner">
                        <div className="container">
                            <h1 className={"inner_headers"}>
                                خطوات العمل
                            </h1>
                            <div className="info">
                                <div className="header_under_line center"></div>
                            </div>


                            <div className="row">

                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            إيجاد الفكرة
                                        </div>
                                        <div className="about_item_desc">
                                            نعمل على إيجاد الفكرة المناسبة للمشروع
                                            وكيفية إدارتها والوقت المتاح لها
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            الجزء النظرى
                                        </div>
                                        <div className="about_item_desc">
                                            ننشأ الملف النظرى الخاص بالمشروع وتسليم كل جزء على حسب الحاجة
                                            إسبوعيا او شهرياً
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            الجزء العملى
                                        </div>
                                        <div className="about_item_desc">
                                            نعمل على الأكواد الخاصة بالمشروع وتسليم كل جزء حسب الحاجة
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            الإختبار
                                        </div>
                                        <div className="about_item_desc">
                                            بعد الإنتهاء من المشروع نفوم بعمل إختبار كامل للتأكد من كفاءة المشروع
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            الشرح
                                        </div>
                                        <div className="about_item_desc">
                                            نقوم بشرح المشروع بالكامل من بدايته وحتى الأكواد الأخيرة له
                                            بالظريقة المناسبة سواء تسجيلات فيديو او شرح اون لاين ...
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 about_item">
                                    <div className="about_item_content">
                                        <div className="about_item_header">
                                            التجهيز للمناقشة
                                        </div>
                                        <div className="about_item_desc">
                                            نقوم بتجهيز أعضاء المشروع للمناقشة والرد على جميع الأسئلة
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <div className="why-us">
                    
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}
