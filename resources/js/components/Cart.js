import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Total from "./Total";
import ProductItem from "./ProductItem";

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            done:false
        };
        this.onDone = this.onDone.bind(this);

    }

    onDone (done){
        this.setState({
            done:done
        });

        if(this.state.done === true){
            setTimeout(() => {
                   return this.props.history.push("/myOrder");
            }, 2000);
        }
    }

    render(){

        const {user, cart, productList} = this.props;

        const findById = productList
              .filter((item) => cart.includes(item.id));

        const mapCart = findById
                            .map((i) => {
                                return (
                                    <ProductItem
                                        key={i.id}
                                        name={i.name}
                                        price={i.price}
                                        id={i.id}
                                        handleTotal={this.props.handleTotal}
                                        setQty={this.props.setQty}

                                    />
                                )
                            }
            );

        if(!this.state.done){
            return (
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                    <div className="row form-group">
                        <div className="col-sm-10">
                            {mapCart}
                        </div>
                    </div>
                    <Total total={this.props.total}
                           onBack={this.onBack}
                           onNext={this.onNext}
                           cart={this.props.cart}
                           onDone={this.onDone}
                           setQty={this.props.setQty}
                           qty={this.state.qty}
                           user={user}
                    />
                </div>
                    </div></section>
            )
        }else{
            return (
                <section className="hero">
                    <div className="hero-body">
                        <div className="container"><h1>Thanks for order Pizza!</h1>

                        </div></div></section>
            )

        }

        }
}


export default withRouter(Cart);