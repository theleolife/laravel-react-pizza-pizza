import React, {Component} from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',

        };
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        if(this.props.isLoggedIn === true){
            this.redirect();
        }
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    submit (e) {
        e.preventDefault();

        const {email, password} = this.state;

        const data = JSON.stringify({
            email: email,
            password: password,
        });
        const requestOptions = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: data
        };

        fetch("/api/login", requestOptions)
            .then(res => res.json())
            .then(res => {
                let data = res;
                // console.log('data token: ',data);
                localStorage.setItem('accessToken', data.accessToken);

                window.location.replace("/myOrder");

            })
            .catch(error => console.log('error', error));
    }

    render() {

        const {email, password} = this.state;

        return (
                    <div className="container">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half">
                                <h1>Login</h1>

                                <form onSubmit={this.submit}>

                                    <div className="field">
                                        <label className="label is-small">Email</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input is-small"
                                                   name="email"
                                                   placeholder="email"
                                                   value={email}
                                                   onChange={this.handleInputChange}
                                            />
                                            <span className="icon is-small is-left">
                            </span>
                                            <span className="icon is-small is-right">
                              <i className="fas fa-check"></i>
                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">Password</label>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input is-small"
                                                   placeholder="password"
                                                   name="password"
                                                   type="password"
                                                   value={password}
                                                   onChange={this.handleInputChange}
                                            />
                                            <span className="icon is-small is-left">
                            </span>
                                            <span className="icon is-small is-right">
                              <i className="fas fa-check"></i>
                            </span>
                                        </div>
                                    </div>


                                    <div className="control">
                                        <button className="button is-primary"
                                                type="submit" value="Submit"
                                        >GO</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>


        )
    }
}
