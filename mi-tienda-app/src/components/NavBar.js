import React from 'react';
import { withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Tienda</span>
                            <span className="icon-bar">Contacto</span>
                            <span className="icon-bar">Nosotros</span>
                            <span className="icon-bar">Ofertas</span>
                        </button>
                        <a className="navbar-brand" href="/">Mosaicos</a>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;