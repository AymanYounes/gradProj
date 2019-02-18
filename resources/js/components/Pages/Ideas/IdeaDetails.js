import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Ideas.css';
import Footer from './../../Layouts/Footer';



export default class ProjectsDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            details: {}
        }
    }
    getProject() {

        axios.get('/api/projects/' + this.props.params.id )
            .then(response => {
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
        this.getProject();
    }

    render() {
        console.log(this.state.myImage);
        return (
            <div className="single_service">
                <div className="container">
                    <img src = {this.state.myImage} className="img-responsive" width={"100%"} height={"200px"}/>

                    <h1>{this.state.details.title}
                        <small className={ "card--tip "+ ((this.state.details.process == 1)?"green" : "blue")}>
                            ({(this.state.details.process == 1)?"مشروع جاهز" : "يتم بناءه عند الرغبة"})
                        </small>
                    </h1>
                    <p>{this.state.details.description}</p>
                </div>
                <Footer />
            </div>
        );
    }
}
