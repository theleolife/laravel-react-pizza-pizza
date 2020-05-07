import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import Product from "./Product";
import {Drawer} from "antd";
import Cart from "./Cart";


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            productList: "",
            cart:[],
            visible: false,
            qty:[]
        };

        this.addToCart = this.addToCart.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.setQty = this.setQty.bind(this);
    }

    onOpen () {
        this.setState({
            visible: true,
        });
    };
    onClose () {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        fetch('/api/items')
            .then(response => {
                return response.json();
            })
            .then(item => {
                this.setState({
                    productList:item
                });
            });
    }

    setQty(e){
        this.setState({
            qty:e
        });
    }

    calculateTotal(price) {
        this.setState({
            total: this.state.total + price
        });
    }
    addToCart (item) {

        let idsCart = this.state.cart.concat(item);

        const countDuplicates = (obj, num) => {
            obj[num] = (++obj[num] || 1);
            return obj;
        };

        let ids = idsCart.reduce(countDuplicates, {});

        let uniqueIds = Object.keys(ids);
        let itemCartIds = uniqueIds.map(Number);

        // // let json = JSON.stringify(uniqueIds);
        // console.log('teste Unique: ', itemCartIds);


        this.setState({
                cart:itemCartIds,
                visible:true
            });
    }



    render() {

        const { user } = this.props

        if (!this.state.productList) return <p>Loading...!!!!</p>;

        const component = this;
        const products = this.state.productList.map(function(product) {
            return (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    handleTotal={component.calculateTotal}
                    total={component.state.total}
                    addToCart={component.addToCart}
                    cart={component.state.cart}
                    productList={component.state.productList}

                />
            );
        });

        const isMobile = true;
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
            <Drawer
                    title="Checkout cart"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={isMobile ? "100%" : "50%"}
                >

                    <Cart
                            setQty={this.setQty}
                            qty={this.state.qty}
                            handleTotal={this.calculateTotal}
                            cart={this.state.cart}
                            total={this.state.total}
                            productList={this.state.productList}
                            user={user}


                    />
                </Drawer>
                {products}
            </div>
                </div></section>
        );
    }
}

export default withRouter(Menu);
