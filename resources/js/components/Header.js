import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Drawer} from "antd";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            visible:false,
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.logout = this.logout.bind(this);

    }

    onOpen () {
        this.setState({
            visible: true,
        });
    };
    onClose () {
        this.setState({
            visible: false,
        });
    };

    logout(){
        this.props.handleLogout();
    }
    render() {
        // console.log('logged users: ', this.props.isLoggedIn, this.props.user.id);

        const mobileHeader = (
            <Drawer
                title="Header"
                placement="left"
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
                width={250}
            >

               <div>
                   <div className="buttons">
                       <a href="/myOrder" className="button is-light" >My Orders</a>
                   </div>
                   <div className="buttons">
                       <a href="/login" className="button is-light" >Login</a>
                   </div>
                   <div className="buttons">
                       <a href="/register" className="button is-light" >Register</a>
                   </div>
               </div>

            </Drawer>

            );

        if(this.props.isLoggedIn === false){
            return (
                <div className="container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">

                            <a className="navbar-item" href="/">Pizza Pizza
                            </a>
                            {mobileHeader}

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                               data-target="navbarBasicExample"
                               onClick={this.onOpen}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a href="/login" className="button is-light" >Login</a>
                                        <a href="/register" className="button is-light" >Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }else {
            return (
                <div className="container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">

                            <a className="navbar-item" href="/">Pizza
                            </a>
                            {mobileHeader}

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                               data-target="navbarBasicExample"
                               onClick={this.onOpen}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a href="/myOrder" className="button is-light" >My Orders</a>
                                        <a  className="button is-light" onClick={this.logout} >Logout</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            )
        }


    }
}
export default withRouter(Header)
