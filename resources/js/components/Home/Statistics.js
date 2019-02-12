import React, { Component } from 'react';
import './Statistics.css';
import Web_icon from './../../Assets/Images/web-icon.png';
import mobile_icon from './../../Assets/Images/mobile-icon.png';


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
            <div className="Statistics">

                <section id="stats" className="hero">
                    <div className="inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 services_item">
                                    <div className="item_content">
                                        <div className="item_icon">
                                            <img src={mobile_icon} width="100px" />
                                        </div>
                                        <div className="item_desc">
                                            تصميم مواقع
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 services_item">
                                    <div className="item_content">
                                        <div className="item_icon">
                                            <img src={Web_icon} width="100px" />
                                        </div>
                                        <div className="item_desc">
                                            Web Design
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 services_item">
                                    <div className="item_content">
                                        <div className="item_icon">
                                            <img src={Web_icon} width="100px" />
                                        </div>
                                        <div className="item_desc">
                                            Web Design
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col-sm-4 services_item">*/}
                                    {/*<div className="item_content">*/}
                                        {/*<div className="item_icon">*/}
                                            {/*<img src={Web_icon} width="100px" />*/}
                                        {/*</div>*/}
                                        {/*<div className="item_desc">*/}
                                            {/*Web Design*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-sm-4 services_item">*/}
                                    {/*<div className="item_content">*/}
                                        {/*<div className="item_icon">*/}
                                            {/*<img src={Web_icon} width="100px" />*/}
                                        {/*</div>*/}
                                        {/*<div className="item_desc">*/}
                                            {/*Web Design*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-sm-4 services_item">*/}
                                    {/*<div className="item_content">*/}
                                        {/*<div className="item_icon">*/}
                                            {/*<img src={Web_icon} width="100px" />*/}
                                        {/*</div>*/}
                                        {/*<div className="item_desc">*/}
                                            {/*Web Design*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );
    }
}
