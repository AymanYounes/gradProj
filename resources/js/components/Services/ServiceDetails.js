import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Services.css';
import services_icon from './../../Assets/Images/services_icon.jpg';
import Footer from './../Home/Footer';



export default class ServicesDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            details: {}
        }
    }


    componentDidMount(){
        axios.get('/api/services/' + this.props.params.id ).then(response => {
            this.setState({
                details: response.data
            });
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                <img src={require("/../../Assets/Images/"+this.state.details.image)}/>
                <h1>{this.state.details.title}</h1>
                <p>{this.state.details.description}</p>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<ServicesDetails />, document.getElementById('example'));
}
