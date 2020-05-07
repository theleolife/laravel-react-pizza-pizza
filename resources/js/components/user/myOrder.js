import React, {Component} from 'react';
import 'antd/dist/antd.css';


export default class MyOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders:[],
        };
    }

    async componentDidMount() {
        const response = await fetch(`/api/myOrders`);
        const json = await response.json();
        this.setState({  orders:json });

        if(this.props.isLoggedIn){
            this.props.isLoggedIn;
        }
    }

    render() {

        const {user, isLoggedIn} = this.props;
        const {orders} = this.state;

        const findBy = orders.filter((i) => i.order.user_id === user.id );
        // console.log(findBy);

         const listOrders = findBy.map(i => {
            return (
                <tr key={i.id}>
                    <td>{i.order.orderNumber}</td>
                    <td>{i.items_order.name}</td>
                    <td>{i.items_order.price}</td>
                </tr>
            )
        });

         if(this.props.isLoggedIn === true){
             return (
                 <div className="container">
                         <div className="column">

                             <h2>My Details</h2>
                             <p>name: {user.name}</p>
                             <p>email: {user.email}</p>
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
             );
         } else {

             return (
                 <div className="container">
                     <div className="columns">

                             <h2>Login or register :)</h2>

                             <div className="buttons">
                                 <a href="/login" className="button is-light" >Login</a>

                                     <a href="/register" className="button is-light" >Register</a>
                           </div>
                     </div>
                 </div>
             );
         }



    }
}
