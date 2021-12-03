import './RightSideTableBody.css';
import React, { useState } from 'react';
import OrderDetails from '../../data/OrderDetails.json'

function RightSideTableBody() {
  const [data] = useState(OrderDetails)
  return (
        <table>
            <thead>
                <th>Артикул</th>
                <th>Наименование</th>
                <th>Цена</th>
            </thead>
            <tbody>
                {data.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.articul}</td>
                        <td>{d.name}</td>
                        <td>{d.price}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
  );
}

export default RightSideTableBody;