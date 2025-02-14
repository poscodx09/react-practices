import React, { useState } from 'react';
import data from './assets/json/data.js';

function App() {
    const [order, setOrder] = useState(data);

    return (
        <div id='App'>
            <button onClick={() => {
                const orderUpdated = Object.assign({}, order);
                orderUpdated.receive = "서울시 금천구 가산동";
                setOrder(orderUpdated);
            }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={() => {
                const orderUpdated = Object.assign({}, order);
                orderUpdated.payment = Object.assign({}, order.payment, {method: 'Cash'});
                setOrder(orderUpdated);
            }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>
            <button onClick={() => {
                const orderUpdated = Object.assign({}, order);
                // sol.1 
                // const goodsUpdated = goods.concat(newObject);

                // sol.2
                orderUpdated.goods = [...orderUpdated.goods, {
                    "no": "c002-003",
                    "name": "블루양말",
                    "price": 5000,
                    "amount": 3
                }]
                setOrder(orderUpdated);
            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={() => {
                const orderUpdated = Object.assign({}, order);
                const goodsUpdate = [...orderUpdated.goods.slice(0,2),
                    Object.assign({}, orderUpdated.goods[2], {name:'블루면티'}),
                    ...orderUpdated.goods.slice(3)  
                ]
                orderUpdated.goods = goodsUpdate;
                setOrder(orderUpdated);
            }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {
                    order?.goods?.map((item) => 
                    <li key={item.no}>
                        상품명: {item.name} | 가격: {item.price.toLocaleString()}원 | 수량: {item.amount}
                    </li>)
                }
            </ul>
        </div>
    );
}

export {App};