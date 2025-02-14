import React, { useState } from 'react';
import data from './assets/json/data.js';

function App() {
    const [order, serOrder] = useState(data);

    return (
        <div id='App'>
            <button>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button>
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