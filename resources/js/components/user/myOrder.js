import React, {Component} from 'react';


export default class MyOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            delivery:[]
        };
    }

    async componentDidMount() {
        const delivery = await fetch(`/api/delivery`);
        const jsonId = await delivery.json();

        const response = await fetch(`/api/order`);
        const json = await response.json();
        this.setState({
            orders:json,
            delivery:jsonId
        }, function () {
            delivery
        });

        if(this.props.isLoggedIn){
            this.props.isLoggedIn;
        }
    }

    render() {

        const {user} = this.props;
        const {orders, delivery} = this.state;

        const findBy = orders.filter((i) => i.user_id === user.id );

        const listOrders = findBy.map(i => {
            return (
                <tr key={i.id}>
                    <td>{i.orderNumber}</td>
                    <td>{i.address}, {i.city}, {i.postCode}</td>
                    <td>{delivery.filter((d) => d.id === i.delivery_id )
                                 .map( x => {
                                        return (
                                               <span key={x.id}>{x.type}: {x.cost}</span>
                                             )
                                        }
                                    )}
                    </td>
                    <td>{i.cart_items.map(i => {
                            return (
                                <p key={i.id}>
                                    <span>{i.items_order.name}</span>
                                </p>
                            )
                         })}
                    </td>
                    <td>{i.priceTotal}</td>
                </tr>
            )
        });

         if(this.props.isLoggedIn === true){
             return (
                 <section className="hero is-light">
                     <div className="hero-body">
                         <div className="container">

                             <h3>My Details</h3>
                             <h4>Name: {user.name}</h4>
                             <h4>Email: {user.email}</h4>
                             <br/>
                             <h3>My Orders</h3>

                             <table className="table is-responsive">
                                 <thead>
                                 <tr>
                                     <th>Order Number</th>
                                     <th>To</th>
                                     <th>Delivery Fee</th>
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
                 <div className="container">
                     <div className="columns is-mobile is-centered">
                         <div className="column is-half">

                             <h3>You need login to access your account.</h3>

                             <div className="buttons">
                                 <a href="/login" className="button is-light" >Login</a>
                                 <br/>
                                 <span>Or </span>
                                 <br/>
                                 <a href="/register" className="button is-light" >Register</a>
                           </div>
                     </div>
                     </div>
                 </div>
             );
         }



    }
}
