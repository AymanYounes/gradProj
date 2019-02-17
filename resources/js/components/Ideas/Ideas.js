import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Ideas.css';
import axios from 'axios';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom';



export default class Services extends Component {

    constructor(){
        super();
        this.state = {
            projects: []
        }
    }


    componentWillMount(){
        axios.get('/api/projects').then(response => {
            this.setState({
                projects: response.data
            });
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.projects.map(project =>
                    <Link key={project.id} to={"/projects/"+ project.id}>
                        <div className="choose-test__wrapper">
                            <div className="card">
                                <div className={"card--cap "+ ((project.process == 1)?" green" : "blue")}>

                                </div>
                                <div className="card--body">
                                    <h2 className={ "card--header "}>
                                        {project.title +' '}
                                        <small className={ "card--tip "+ ((project.process == 1)?"green" : "blue")}>
                                            ({(project.process == 1)?"مشروع جاهز" : "يتم بناءه عند الرغبة"})
                                        </small>
                                    </h2>

                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Services />, document.getElementById('example'));
}
