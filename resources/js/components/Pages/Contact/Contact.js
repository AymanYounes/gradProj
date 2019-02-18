import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom';



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
            <div className="container">
                {this.state.services.map(service =>

                    <Link to={"/services/"+ service.id}> {service.title} </Link>
                )}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Services />, document.getElementById('example'));
}
