import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Login from "./components/user/login";
import Register from "./components/user/register";
import MyOrder from "./components/user/myOrder";

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: "",
            visible:false
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.openCart = this.openCart.bind(this);

    }

    openCart (e){
        this.setState({
            visible: e
        })
    }

    handleLogout() {

        localStorage.removeItem('accessToken');

        this.setState({
            isLoggedIn: false,
            user: "",
        });

        this.props.history.push('/login');

    }


    componentDidMount() {

        const token = localStorage.getItem('accessToken');

        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("/api/user", requestOptions)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    isLoggedIn:true,
                    user: res.success,
                });

            }).catch(error => console.log('error', error));
    }


    render() {

        return (

            <BrowserRouter>
                <div className="App">

                    <Header  isLoggedIn={this.state.isLoggedIn}
                             handleLogout={this.handleLogout}
                             user={this.state.user}
                             openCart={this.openCart}
                    />

                    <Switch>
                        <Route exact path="/"
                               render={(props)=> <Menu {...props}
                                                        isLoggedIn={this.state.isLoggedIn}
                                                        user={this.state.user}
                                                       visible={this.state.visible}
                                                       openCart={this.openCart}


                               />}

                        />
                        <Route exact path="/login"
                               render={(props)=> <Login {...props}
                                                        isLoggedIn={this.state.isLoggedIn}
                                           />}
                        />
                        <Route exact path="/register"
                               render={(props)=> <Register {...props}
                                                           isLoggedIn={this.state.isLoggedIn}

                               />}
                        />
                        <Route exact path="/MyOrder"
                               render={(props)=> <MyOrder {...props}
                                                           isLoggedIn={this.state.isLoggedIn}
                                                           user={this.state.user}

                               />}
                        />
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

