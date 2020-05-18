import React, { Component } from 'react';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count+1)
    );
    return count;
}

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            Name:'',
            address:'',
            postcode:'',
            city:'',
            mobile:'',
            orderNumber:'',
            formValid: false,
            errorCount: null,
            errors: {
                email:'',
                Name:'',
                address:'',
                postcode:'',
                city:'',
                mobile:'',
            }
        };
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){

        e.preventDefault();
        const { name, value } = event.target;


        let errors = this.state.errors;

        switch (name) {
            case 'Name':
                errors.Name =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'address':
                errors.address =
                    value.length < 5
                        ? 'Address is required!'
                        : '';
                break;
            case 'postcode':
                errors.postcode =
                    value.length < 5
                        ? 'Postcode is required!'
                        : '';
                break;
            case 'city':
                errors.city =
                    value.length < 5
                        ? 'City is required!'
                        : '';
                break;
            case 'mobile':
                errors.mobile =
                    value.length < 5
                        ? 'Mobile number is required!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    submit (e) {
        e.preventDefault();

        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});

        const { user, cart } = this.props

        const {Name, address, postcode, city, mobile, email} = this.state;

        const itemsCart = cart.toString();

        const data = JSON.stringify({
            user_id: user.id,
            name: Name,
            email: email,
            address: address,
            postCode: postcode,
            city: city,
            phoneNumber: mobile,
            country: "Brazil",
            delivery_id: '1',
            priceTotal: this.props.total,
            items: itemsCart,
            qtd: ''
        });

        const requestOptions = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: data
        };
        if(validateForm(this.state.errors)) {
            // console.info('Valid Form')
            fetch("/api/orders", requestOptions)
                .then(function(response) {
                    if (!response.ok) {
                        throw Error(response.statusText);
                        console.error('Invalid Form status 500')
                    }
                    return response;
                })
                .then(res => res.json())
                .then((response) => {
                    console.log("ok");
                    this.props.onDone(true);

                })
                .catch(error => console.log('error', error));
        }else{
            console.error('Invalid Form')
        }


    }

    render() {
        const {Name, address, postcode, city, mobile, email} = this.state;

        const {errors, formValid} = this.state;


        return (
            <div>
                <h4>Delivery address</h4>

                <form onSubmit={this.submit} noValidate>


                    <div className="field">
                        <label className="label is-small">Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   name="Name"
                                   placeholder="Name"
                                   value={Name}
                                   onChange={this.handleInputChange}
                                   noValidate
                            />
                            {errors.Name.length > 0 &&
                            <p class="help is-danger">{errors.Name}</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label is-small">Email</label>
                        <div className="control">
                            <input className="input is-small"
                                   name="email"
                                   type="email"
                                   placeholder="Email"
                                   value={email}
                                   onChange={this.handleInputChange}
                                   noValidate
                            />
                            {errors.email.length > 0 &&
                            <p className="help is-danger">{errors.email}</p>}
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
                                   noValidate
                            />
                            {errors.address.length > 0 &&
                            <p className="help is-danger">{errors.address}</p>}
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
                                   noValidate
                            />
                            {errors.city.length > 0 &&
                            <p className="help is-danger">{errors.city}</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label is-small">PostCode</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   placeholder="PostCode"
                                   name="postcode"
                                   value={postcode}
                                   type="number"
                                   onChange={this.handleInputChange}
                            />
                            {errors.postcode.length > 0 &&
                            <p className="help is-danger">{errors.postcode}</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label is-small">Mobile number</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-small"
                                   name="mobile"
                                   placeholder="Mobile number"
                                   value={mobile}
                                   type="number"
                                   onChange={this.handleInputChange}
                                   noValidate
                            />
                            {errors.mobile.length > 0 &&
                            <p className="help is-danger">{errors.mobile}</p>}
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
