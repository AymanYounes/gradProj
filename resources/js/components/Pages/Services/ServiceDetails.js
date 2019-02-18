import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Services.css';
import Footer from './../../Layouts/Footer';



export default class ServicesDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            details: {}
        }
    }
    getService() {

        axios.get('/api/services/' + this.props.params.id )
            .then(response => {
                // let image = btoa(
                //     new Uint8Array(response.data)
                //         .reduce((data, byte) => data + String.fromCharCode(byte), '')
                // );
                this.setState({
                    details: response.data,
                    myImage: require("./../../Assets/Images/"+response.data.image),
                    isLoading: false
                });
            }).catch(errors =>{
            this.setState({ errors, isLoading: false });
            console.log(errors);
        })
    }


    componentDidMount(){
        this.getService();
    }

    render() {
        console.log(this.state.myImage);
        return (
            <div className="single_service">
                <div className="container">
                    <img src = {this.state.myImage} className="img-responsive" width={"100%"} height={"200px"}/>

                    <h1>{this.state.details.title}</h1>
                    <p>{this.state.details.description}</p>
                </div>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<ServicesDetails />, document.getElementById('example'));
}
