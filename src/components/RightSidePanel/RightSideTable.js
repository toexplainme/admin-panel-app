import './RightSideTable.css';
import React, { useState } from 'react';
import OrderDetails from '../../data/OrderDetails.json'
import { connect } from 'react-redux';
import { selectors } from "../../data";

function RightSideTable({ orderId }) {

  let [data] = useState(OrderDetails)
  data = data.filter((d) => (d.id === orderId))
  
  const totalSum = data.map(item => item.price).reduce((acc, item) => item + acc, 0);

  return (
    <div className="right_side__table">
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
                        <td>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(d.price)}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        <div className="right_side_table__footer">
                <div className="right_side_table__footer-total">
                    Итоговая сумма
                    <span className="right_side_table__footer-total"> {Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(totalSum)}</span>
                </div>
        </div>
    </div>
  );
}

const mapStateToProps = function(appState) {

    return {
        orderId: selectors.getOrderId(appState)
    }
  
  }
  
  export default connect(mapStateToProps)(RightSideTable);