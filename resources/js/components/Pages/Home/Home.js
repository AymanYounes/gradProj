import React, { Component } from 'react';
import PageProgress from 'react-page-progress';
import Slider from './Slider';
import LatestProjects from './LatestProjects';
import Statistics from './Statistics';
import Contact from './Contact';
import Footer from './../../Layouts/Footer';
import Slider_1 from './../../../Assets/Images/slider-1.jpg';
import Slider_2 from './../../../Assets/Images/slider-2.jpg';
import Slider_3 from './../../../Assets/Images/slider-3.jpg';
import Slider_4 from './../../../Assets/Images/slider-4.jpg';


export default class Home extends Component {

    constructor(){
        super();

        this.state = {
            services: [],
            projects: [],
            statistics: []
        }

    }



    componentWillMount(){

    }

    render() {
        let slides = [
            {
                background: Slider_1,
                desc: "تصميم وتطوير المواقع الإلكترونية",
                text: "إبدأ الآن"
            },
            {
                background: Slider_2,
                desc: "تصميم وتطوير المواقع الإلكترونية",
                text: "إبدأ الآن"
            },
            {
                background: Slider_3,
                desc: "تصميم وتطوير المواقع الإلكترونية",
                text: "إبدأ الآن"
            },
            {
                background: Slider_4,
                desc: "تصميم وتطوير المواقع الإلكترونية",
                text: "إبدأ الآن"
            }
        ];
        return (
            <div>

                {/*<PageProgress />*/}
                <Slider slides={slides} />
                <LatestProjects  />
                <Statistics  />
                <Contact  />
                <Footer  />
            </div>
        );
    }
}
