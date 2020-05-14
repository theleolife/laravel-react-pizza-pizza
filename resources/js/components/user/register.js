import React, { Component } from 'react';
import 'antd/dist/antd.css';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            Email:'',
            Pass:'',
        };
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
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

        const {Email, Name, Pass} = this.state;

        const data = JSON.stringify({
            name: Name,
            email: Email,
            password: Pass,
        });

        const requestOptions = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: data
        };

        fetch("/api/register", requestOptions)
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

        const {Email, Name, Pass} = this.state;

        return (
            <div className="container">
                <div className="columns is-mobile is-centered">
                    <div className="column is-half">
                <h1>Register</h1>


                <form onSubmit={this.submit}>
                    <div className="field">
                        <label className="label is-small">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   placeholder="Name"
                                   name="Name"
                                   value={Name}
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
                        <label className="label is-small">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   placeholder="email"
                                   name="Email"
                                   value={Email}
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
                                   name="Pass"
                                   value={Pass}
                                   type="password"
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
                        <button className="button is-primary is-fullwidth"
                                type="submit" value="Submit"
                        >Register</button>
                    </div>
                    <a href="/register"  className="is-link">
                        or Login
                    </a>

                </form>

            </div>
                </div>
            </div>
        )
    }
}
