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
        this.redirect = this.redirect.bind(this);


    }
    redirect (){
        window.location.replace("/myOrder");

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

        const data = {
            email: email,
            password: password,
        };
        console.log(data);

        const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        console.log("headers: ", headers);

        axios.post('/api/login/', data, {
            headers: headers
        })
            .then((res) => {
                console.log('data send: ',res.data);
                //remove token before to insert new one
                // localStorage.removeItem('accessToken');
                localStorage.setItem('accessToken', res.data.accessToken);
                this.redirect();
            })
            .catch(error => {
                console.log(error.message);
                // alert(error.message )
            })
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
