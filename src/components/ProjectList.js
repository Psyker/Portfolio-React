import React from 'react';
import Project from "./Project";
import { _fetchData } from '../api';

export default class ProjectList extends React.Component
{
    constructor() {
        super();

        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
      _fetchData('projects').then((projects) => {
          this.setState({projects})
      })
    }

    render() {
        return (
            <div className="container col-8 mt-2">
                <h2 className="text-center">Portfolio</h2>
                <div className="filter-body columns col-12">
                    {
                        this.state.projects.map((project) => {
                          return <Project {...project} key={project.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}
