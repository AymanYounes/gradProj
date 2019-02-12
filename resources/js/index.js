import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import './index.css';
import {BrowserRouter as Router , Link , Route,matchPath} from 'react-router-dom';
import MainNavbar from './components/Navbar/Navbar';
import InnerNavbar from './components/Navbar/InnerNavbar';
import About from "./components/About/About";
import Ideas from "./components/Ideas/Ideas";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import ServiceDetails from './components/Services/ServiceDetails';

export default class Index extends Component {

    constructor (props) {
        super(props);
        this.state = { toggle: true };
    }

    render() {
        var currentPath = window.location.pathname;
        return (
            <Router>
                <div>
                <div className="App">
                    {!currentPath.includes('/')
                        ? <MainNavbar />
                        : <InnerNavbar/> }
                    {/*{(window.location.pathname == '/')?<MainNavbar/>:<InnerNavbar/>}*/}
                    {/*{this.toRender()}*/}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/project-ideas" component={Ideas} />
                        <Route exact path="/who-we-are" component={About} />
                        <Route exact path="/contact" component={Contact} />
                                <Route exact
                                       path="/services/:id"
                                       location={this.props.location}
                                       key={this.props.location}
                        render={({
                        location,
                        match
                        }) => (
                        <ServiceDetails key={this.props.location}  params={match.params}/>
                        )} />

                </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
