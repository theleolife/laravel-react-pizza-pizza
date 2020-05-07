import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">Pizza Pizza
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <div classNaeme="navbar-item">
                            <div className="buttons">
                                <a href="/myOrder" className="button is-light" >Conta</a></div>
                             </div>
                        </div>
                    </div>
            </nav>
        )
    }
}
export default withRouter(Header)
