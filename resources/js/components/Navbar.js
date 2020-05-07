import React from 'react';



const Navbar = (props) => {
    const item = props.item.map(item => {
        return (
            <p key={item.id}>{item.id}</p>
        );
    });
    return (
        <div>
            {item}
        </div>
    );
};

export default Navbar;
