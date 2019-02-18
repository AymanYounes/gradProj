import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LatestProjects.css';
import ProjectsSlider from "./ProjectsSlider";


export default class LatestProjects extends Component {

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
        return (
            <div className="latest_projects">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ProjectsSlider/>
                        </div>
                        <div className="col-sm-6 dir-ar text-ar">
                            <h2>من نحن..</h2>
                            <div className="header_under_line"></div>
                            <p className="about_us_p">
                                نحن فريق من المبرمجين متخصصين فى مجالات برمجية عدة
                                ولدينا الخبرة العملية لأكثر من 10 أعوام فى مختلف مجالات البرمجة
                                 من برامج مكتب ومواقع إلكترونية وتطبيقات موبايل...
                            </p>
                            <p className="about_us_p">
                                نبدأ معك مشروعك من أول المساعدة على إختيار الفكرة الأفضل وعرض الأفكار المتاحة لدينا
                                من واقع خبرتنا وبدأ عمل المشروع نظريا وحتى إتمامه برمجياً ومساعدتك حتى يوم
                                المناقشة والتسليم فى كل ما يخص المشروع حتى تتمكن من اجتياز المناقشة بأعلى الدرجات

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
