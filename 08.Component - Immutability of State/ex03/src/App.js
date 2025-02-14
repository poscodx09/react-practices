import React, { useState } from 'react';
import data from './assets/json/data.js';
import update from 'react-addons-update';


const GoodList = ({goods}) => {
    return (
        <ul>
            {goods.map((g, _) => <li key={g}>{g.name}|{g.price}|{g.amount}</li>)}
        </ul>
    )
}

function App() {
    const [order, setOrder] = useState(data);

    return (
        <div id='App'>
            <p>{`배송지:${order.receive}`}</p>
            <p>{`결제수단:${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <GoodList goods={order.goods}/>
            <button onClick={() => {
                setOrder(
                    update(order, {
                        receive: {
                            $set: "서우리 금천구 가산동"
                       }
                    })
                )
            }}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};