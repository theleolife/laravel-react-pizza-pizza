import React, { Component } from 'react';
import 'antd/dist/antd.css';
import pizza from "../pizza.png";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add () {
        const {addToCart, handleTotal, id, price} = this.props;
        handleTotal(+price);

        //add to ids to cart
        addToCart(id);

        this.setState({
            visible:true
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row form-group">
                    <div className="col-sm-10">
                        <h4>{this.props.name}: ${this.props.price}</h4>
                    </div>
                    <button className="button"
                            onClick={this.add}
                    >
                        Buy
                    </button>
                </div>
                <hr />

            </div>
        );
    }
}

export default Product;



