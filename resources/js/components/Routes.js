import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home';
import { Router , IndexRoute , Route, Switch,withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components'
import About from "./Pages/About/About";
import Ideas from "./Pages/Ideas/Ideas";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import ServiceDetails from './Pages/Services/ServiceDetails';
import IdeaDetails from './Pages/Ideas/IdeaDetails';

import { TransitionGroup, CSSTransition } from "react-transition-group";


function PageRouter({ location }) {


        return (

            <Wrapper>
            <TransitionGroup className="transition-group">

            <CSSTransition
                        key={location.key}
                        timeout={{ enter: 1000, exit: 600 }}
                        classNames="fade"
                    >
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/projects" component={Ideas} />
                    <Route exact path="/who-we-are" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    {/*<Route exact*/}
                           {/*path="/services/:id"*/}
                           {/*location={this.props.location}*/}
                           {/*key={this.props.location}*/}
                            {/*render={({*/}
                            {/*location,*/}
                            {/*match*/}
                            {/*}) => (*/}
                    {/*<ServiceDetails key={this.props.location}  params={match.params}/>*/}
                    {/*)} />*/}

                    {/*<Route exact*/}
                           {/*path="/projects/:id"*/}
                           {/*location={this.props.location}*/}
                           {/*key={this.props.location}*/}
                            {/*render={({*/}
                            {/*location,*/}
                            {/*match*/}
                            {/*}) => (*/}
                    {/*<IdeaDetails key={this.props.location}  params={match.params}/>*/}
                    {/*)} />*/}
                </Switch>

            </CSSTransition>
            </TransitionGroup>
            </Wrapper>

        );
}
const Wrapper = styled.div`
    // omitted
    
      div.transition-group {
           position: relative;
      }
      section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
`;

export default withRouter(PageRouter);
