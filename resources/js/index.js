import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Pages/Home/Home';
// import './index.css';
import './index.scss';
import { Router , IndexRoute , Route, Switch,withRouter} from 'react-router-dom';
import PageProgress from 'react-page-progress';
import { Lines ,Circle2 } from 'react-preloaders';
import MainNavbar from './components/Layouts/Navbar/Navbar';
import InnerNavbar from './components/Layouts/Navbar/InnerNavbar';
import NavbarWithHero from './components/Layouts/Navbar/NavbarWithHero';
import PageRouter from './components/Routes'
import createHistory from 'history/createBrowserHistory';

import { TransitionGroup, CSSTransition } from "react-transition-group";



const history = createHistory();

export default class Index extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navbar: <MainNavbar/>
        };
    }

    updateNavBar(nav){
        (nav === '/' || nav === ''|| nav === '/who-we-are' )?
            this.setState({
                navbar:<MainNavbar/>
            })
        :(nav === '/who-we-are')?
            this.setState({
                navbar:<NavbarWithHero/>
            })
            :this.setState({
                navbar:<InnerNavbar/>
            })
    }


    componentDidMount(){
        this.updateNavBar(window.location.pathname);
    }

    render() {



        const unlisten = history.listen((location, action) => {
                this.updateNavBar(location.pathname)
        });

        return (
            <React.Fragment>
                <Circle2
                    color={'#ff5050'}
                    bgColor={'#222'}
                    time={1400}
                />
            <Router history={history}>
                <div>
                    <PageProgress color={'#ff5050'} height={5} />
                    <div className="App">
                        {this.state.navbar}
                        <PageRouter />
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
