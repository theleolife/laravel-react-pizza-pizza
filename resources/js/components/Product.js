import React, { Component } from 'react';
import 'antd/dist/antd.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add () {
        const {addToCart, handleTotal, id, price, visible} = this.props;
        handleTotal(+price);

        //add to ids to cart
        addToCart(id);
        visible(true)
    }

    render() {
        const { price, description, img, name, visible} = this.props;

        console.log('product cart:', visible);

        return (
            <div className="column is-3">
                <div className="card is-hovered">
                    <div className="card-image ">
                        <figure className="image is-4by3">
                            <img src={img} alt={name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>{name} </h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">${price}</a>
                        <a href="#" className="card-footer-item" onClick={this.add}>Buy</a>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Product;



