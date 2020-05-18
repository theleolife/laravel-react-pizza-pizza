import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import Details from "./Details";


class Total extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                costDelivery: [],
                value:0,
            };
        this.okay = this.okay.bind(this);

    }

    componentDidMount() {
        fetch('/api/delivery')
            .then(response => {
                return response.json();
            })
            .then(res => {
                this.setState({
                    costDelivery:res
                });
            });
    }

    okay (){
        this.props.onDone(true);
    }

    render() {
        const {user} = this.props;
        let total = this.props.total.toFixed(2);
        let delivery = this.state.value;
        let totalIncTax = (+total + + delivery).toFixed(2);

        const onChange = e => {
            // console.log('radio checked', e.target.value);
            this.setState({
                value: e.target.value,
            });
        };
        const deliveryOption = this.state.costDelivery.map((cost) => {
            return (
                <Radio onChange={onChange}
                       defaultChecked="1"
                       value={cost.cost}
                       key={cost.id}
                >
                    {cost.type}: ${cost.cost}
                </Radio>
            );
        });

            return (
                <div className="container">
                    <Radio.Group>
                       <h4>Delivery cost</h4>
                        {deliveryOption}
                    </Radio.Group>

                    <div style={{"marginTop": "20px", "backgroundColor": "#fafafa", "padding": "10px"}}>
                        <h3>Total</h3>
                        <div className="row" style={{fontWeight: 400}}>
                            <span className="col-6">total price:</span>
                            <span className="col-6 text-right">${total}</span>
                        </div>
                        <div className="row" style={{fontWeight: 400}}>
                            <span className="col-6">Delivery cost:</span>
                            <span className="col-6 text-right">${delivery}</span>
                        </div>
                        <div className="row">
                            <span className="col-6">Grant  Total:</span>
                            <span className="col-6 text-right">${totalIncTax}</span>
                        </div>
                    </div>
                    <br/>
                    <Details
                        onDone={this.okay}
                        total={this.props.total}
                        cart={ this.props.cart}
                        user={user}
                    />
                </div>

            );
    }
}

export  default Total;
