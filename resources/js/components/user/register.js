import React, { Component } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

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

        const data = {
            name: Name,
            email: Email,
            password: Pass,
        };
        console.log(data);

        const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        console.log("headers: ", headers);

        axios.post('/api/register/', data, {
            headers: headers
        })
            .then(res => {
                console.log(res);
                console.log('data token: ',res.data);
                return this.props.history.push("/login");

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    render() {

        const {Email, Name, Pass} = this.state;

        return (
            <div className="container">
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
                        <button className="button is-primary"
                                type="submit" value="Submit"
                        >GO</button>
                    </div>

                </form>

            </div>
        )
    }
}
