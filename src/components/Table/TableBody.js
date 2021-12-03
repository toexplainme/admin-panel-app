import './TableBody.css';
import Checkbox from '../common/Checkbox';
import { connect } from 'react-redux';
import { actions, store, myColumn } from '../../data'
import { selectors } from "../../data";

import { ReactComponent as IconAbort    } from '../common/icons/abort.svg';
import { ReactComponent as IconCheckmark} from '../common/icons/checkmark.svg';
import { ReactComponent as IconDot      } from '../common/icons/dot.svg';

const { ordersSortAction } = actions

const { 
    CREATED_COL,
    STATUS_COL,
    POSITIONS_COL,
    SUM_COL,
  } = myColumn 

const StatusClass = {
    Новый: "table__status-new",
    Расчет: "table__status-inprogress",
    Выполнен: "table__status-done",
    Отменен: "table__status-canceled",
    Отложен: "table__status-delayed",
};

const StatusIcon = {
    Новый: <IconDot className="table__status_icon-new"/>,
    Расчет: <IconDot className="table__status_icon-inprogress"/>,
    Выполнен: <IconCheckmark className="table__status_icon-done"/>,
    Отменен: <IconAbort className="table__status_icon-canceled"/>,
    Отложен: <IconDot className="table__status_icon-delayed"/>,
};

function TableBody({ ordersList }) { 

    const OrdersListSelected = ordersList.map((d) => {

        return (
            <tr key={d.id}>
                <td><Checkbox/></td>
                <td>{d.id}</td>
                <td>{d.created}</td>
                <td className={`table__status ${StatusClass[d.status]}`}>{StatusIcon[d.status]}{d.status}</td>
                <td>{d.positions}</td>
                <td>{(d.sum !== '-') ? Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(d.sum) : d.sum}</td>
                <td>{d.name}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <th><Checkbox/></th>
                <th>#</th>
                <th onClick={()=>{store.dispatch(ordersSortAction(CREATED_COL))}}>Дата</th>
                <th onClick={()=>{store.dispatch(ordersSortAction(STATUS_COL))}}>Статус</th>
                <th onClick={()=>{store.dispatch(ordersSortAction(POSITIONS_COL))}}>Позиций</th>
                <th onClick={()=>{store.dispatch(ordersSortAction(SUM_COL))}}>Сумма</th>
                <th>ФИО покупателя</th>
            </thead>
            <tbody>
                {OrdersListSelected}
            </tbody>
        </table>
  );
}

const mapStateToProps = function(state) {
    
    return {
        ordersList: selectors.getResultOrders(state)
    }

}

export default connect(mapStateToProps)(TableBody);