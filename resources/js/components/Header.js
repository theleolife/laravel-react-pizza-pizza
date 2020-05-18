import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Drawer} from "antd";
import pizza from '../pizza.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            open:false,
        };
        this.openNav = this.openNav.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.logout = this.logout.bind(this);
    }

    onOpen () {
        this.props.openCart(true)
    };
    openNav () {
        this.setState({
            navMobile: true,
        });
    }
    onClose () {
        this.setState({
            navMobile: false,
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
                visible={this.state.navMobile}
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

                            <a className="navbar-item" href="/">
                                <img src={pizza} />
                                <span>Pizza Pizza</span>
                            </a>
                            {mobileHeader}
                        </div>
                        <a className="navbar-burger"
                           onClick={this.onOpen}
                        >
                                                    <span className="icon">
                                                      <i className="fas fa-shopping-cart"></i>
                                                    </span>
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample"
                           onClick={this.openNav}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>


                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a className="button is-light" onClick={this.onOpen} >
                                            <span className="icon">
                                              <i className="fas fa-shopping-cart"></i>
                                            </span>
                                            <span>Cart</span>
                                        </a>

                                        <a href="/myOrder"  className="button is-light">
                                            <span className="icon">
                                              <i className="fas fa-user-circle"></i>
                                            </span>
                                            <span>Account</span>
                                        </a>
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

                            <a className="navbar-item" href="/">
                                <img src={pizza} />
                                <span>Pizza Pizza</span>

                            </a>
                            {mobileHeader}
                            <a className="navbar-burger"
                               onClick={this.onOpen}
                            >
                                                    <span className="icon">
                                                      <i className="fas fa-shopping-cart"></i>
                                                    </span>
                            </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                               data-target="navbarBasicExample"
                               onClick={this.openNav}>
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
                                        <a className="button is-light" onClick={this.onOpen} >
                                            <span className="icon">
                                              <i className="fas fa-shopping-cart"></i>
                                            </span>
                                            <span>My Cart</span>
                                        </a>
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
