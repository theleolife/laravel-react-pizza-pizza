import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'


export default class MyOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders:[],
        };
    }

    componentDidMount() {
        fetch('/api/myOrders')
            .then(response => {
                return response.json();
            })
            .then(order => {
                this.setState({
                    orders:order
                });

            });
    }
    render() {

        console.log('my orders: ',this.props.isLoggedIn)

        const {user, isLoggedIn} = this.props;
        const {orders} = this.state;

        const findBy = orders.filter((i) => i.order.user_id === user.id);
        // console.log(findBy);

         const listOrders = findBy.map(i => {
            return (
                <tr key={i.id}>
                    <td>{i.order.orderNumber}</td>
                    <td>{i.items_order.name}</td>
                    <td>{i.order.priceTotal}</td>
                </tr>
            )
        });

         if(this.props.isLoggedIn === true){
             return (
                 <section className="hero">
                     <div className="hero-body">
                         <div className="container">

                             <h2>My Details</h2>
                             <p>name: {user.name}</p>
                             <br/>
                             <h2>My Orders</h2>

                             <table className="table is-responsive">
                                 <thead>
                                 <tr>
                                     <th>Order Number</th>
                                     <th>Products</th>
                                     <th>Total</th>
                                 </tr>
                                 </thead>
                                 <tbody>

                                 {listOrders}

                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </section>
             );
         } else {

             return (
                 <section className="hero">
                     <div className="hero-body">
                         <div className="container">

                             <h2>Login or register :)</h2>

                             <div className="buttons">
                                 <a href="/login" className="button is-light" >Login</a>

                                     <a href="/register" className="button is-light" >Register</a>
                           </div>
                         </div>
                     </div>
                 </section>
             );
         }



    }
}
