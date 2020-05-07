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
        };
        this.handleLogout = this.handleLogout.bind(this);
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

        // console.log(this.state.isLoggedIn);

        return (
            <BrowserRouter>
                <div className="App">

                    <Header isLoggedIn={this.state.isLoggedIn}
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                    />

                    <Switch>
                        <Route exact path="/"
                               render={(props)=> <Menu {...props}
                                                        isLoggedIn={this.state.isLoggedIn}
                                                        user={this.state.user}
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

