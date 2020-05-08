import React, { Component } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            address:'',
            postcode:'',
            city:'',
            mobile:'',
            orderNumber:''
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

        const { user } = this.props

        const {Name, address, postcode, city, mobile} = this.state;

        const itemsCart = this.props.cart.toString();

        const data = {
            user_id: user.id,
            name: Name,
            address: address,
            postCode: postcode,
            city: city,
            phoneNumber: mobile,
            country: "Brazil",
            delivery_id: '1',
            priceTotal: this.props.total,
            items: itemsCart,
            qtd: ''
        };

        axios.post('/api/orders/', data)
             .then(res => {
                console.log('data send: ',res.data);
                if (res.status === 201) {
                    this.props.onDone(true)
                }
            })
            .catch(error => {
            console.log(error.message);
        })
    }

    render() {
        const {Name, address, postcode, city, mobile} = this.state;

        return (
            <div>
                <h3>Delivery address</h3>

                <form onSubmit={this.submit}>

                    <div className="field">
                        <label className="label is-small">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   name="Name"
                                   placeholder="Name"
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
                        <label className="label is-small">Address</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   placeholder="Address"
                                   name="address"
                                   value={address}
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
                        <label className="label is-small">City</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   name="city"
                                   placeholder="City"
                                   value={city}
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
                        <label className="label is-small">PostCode</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   placeholder="PostCode"
                                   name="postcode"
                                   value={postcode}
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
                        <label className="label is-small">Mobile number</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   name="mobile"
                                   placeholder="Mobile number"
                                   value={mobile}
                                   onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left"></span>
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"></i>
                            </span>
                        </div>
                    </div>



                    <div className="control">
                        <button className="button is-primary is-fullwidth"
                                type="submit" value="Submit"
                        >Submit</button>
                    </div>

                </form>

            </div>
        )
    }
}
