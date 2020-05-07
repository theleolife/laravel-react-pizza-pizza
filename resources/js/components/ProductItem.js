import React, { Component } from 'react';
import 'antd/dist/antd.css';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            qtdID: []
        };
        this.more = this.more.bind(this);
        this.less = this.less.bind(this);

    }

    componentDidMount() {
        this.props.setQty(this.state.qtdID);

    }

    more () {
        const {handleTotal, price, setQty} = this.props;

        handleTotal(+ price);
        setQty(this.state.qtdID);

        this.setState({
            quantity: this.state.quantity + 1,
        });

    }


    less () {
        const {handleTotal, price, setQty} = this.props;

        handleTotal( - price);
        setQty(this.state.qtdID);


        this.setState({
            quantity: this.state.quantity - 1,
        });

    }


    render() {

        let ar = this.state.qtdID;
        let id = this.props.id;
        ar[id] = id ;
        let qty = id + ':' + this.state.quantity ;
        ar[id] = qty;

        return (
            <div className="container"
                 key={this.props.id}
            >
                <div className="row form-group">
                    <div className="col-sm-10">
                        <tex>{this.props.name}: ${this.props.price}     -      qty: {this.state.quantity}

                            <button className="btn is-small is-text"
                                    onClick={this.more}
                            >
                                +
                            </button>
                            <button className="btn is-text is-small"
                                    onClick={this.less}
                                    disabled={this.state.quantity < 1}
                            >
                                -
                            </button>
                        </tex>


                    </div>

                </div>
                <hr />

            </div>
        );
    }
}

export default ProductItem;
