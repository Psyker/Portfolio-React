import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="navbar bg-white">
                <section className="navbar-center">
                    <NavLink className="btn btn-link" to="/">Accueil</NavLink>
                    <a className="btn btn-link" href="">Projets</a>
                    <a className="btn btn-link" href="">Twitter</a>
                    <a className="btn btn-link" href="">Github</a>
                </section>    
        </header>
        );
    }
}