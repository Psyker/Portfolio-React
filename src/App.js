import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import Layout from './layout/layout';
import ProjectPage from './pages/project';
import LoginPage from './pages/login';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Redirect from={"/"} to={"/home"}/>
                <Layout>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/project/:id" component={ProjectPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Layout>
            </div>
        )
    }
}

