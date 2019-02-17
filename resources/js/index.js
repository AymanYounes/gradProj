import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
// import './index.css';
import './index.scss';
import { Router , IndexRoute , Route} from 'react-router-dom';
import PageProgress from 'react-page-progress';
import { Lines ,Circle2 } from 'react-preloaders';
import MainNavbar from './components/Navbar/Navbar';
import InnerNavbar from './components/Navbar/InnerNavbar';
import About from "./components/About/About";
import Ideas from "./components/Ideas/Ideas";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import ServiceDetails from './components/Services/ServiceDetails';
import IdeaDetails from './components/Ideas/IdeaDetails';


// Create history object.
import createHistory from 'history/createBrowserHistory';
const history = createHistory();




export default class Index extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navbar: <MainNavbar/>
        };
    }

    updateNavBar(nav){
        (nav === '/' || nav === '' )?
            this.setState({
                navbar:<MainNavbar/>
            })
        :this.setState({
                navbar:<InnerNavbar/>
            })
    }


    render() {
        const unlisten = history.listen((location, action) => {
                this.updateNavBar(location.pathname)
        });

        return (
            <React.Fragment>
                <Circle2
                    color={'#8BC3A3'} //Default #2D2D2D
                    bgColor={'#222'} //Default #F7F7F7
                    time={1400} //Default #1300
                />
            <Router history={history}>
                <div>
                    <PageProgress color={'Aquamarine'} height={5} />
                <div className="App">
                    {this.state.navbar}
                        <Route exact path="/" component={Home} />
                        {/*<IndexRoute component={Home} />*/}
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/projects" component={Ideas} />
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

                        <Route exact
                               path="/projects/:id"
                               location={this.props.location}
                               key={this.props.location}
                                render={({
                                location,
                                match
                                }) => (
                        <IdeaDetails key={this.props.location}  params={match.params}/>
                        )} />

                </div>
                </div>
            </Router>
            </React.Fragment>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
