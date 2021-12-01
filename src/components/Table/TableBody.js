import './TableBody.css';
import Checkbox from '../common/Checkbox';
import React, { useState } from 'react';
import Orders from '../../data/Orders.json';
import { connect } from 'react-redux';

import { ReactComponent as IconAbort    } from '../common/icons/abort.svg';
import { ReactComponent as IconCheckmark} from '../common/icons/checkmark.svg';
import { ReactComponent as IconDot      } from '../common/icons/dot.svg';

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

function TableBody({
    filterOrderOrFio,
    filterDateFrom,
    filterDateTo,
    filterStatus,
    filterPriceFrom,
    filterPriceTo, }) { 
    const [data, setdata] = useState(Orders)
    const [order, setorder] = useState("ASC")
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    }
  return (
        <table>
            <thead>
                <th><Checkbox/></th>
                <th>#</th>
                <th onClick={()=>sorting("created")}>Дата</th>
                <th onClick={()=>sorting("status")}>Статус</th>
                <th onClick={()=>sorting("positions")}>Позиций</th>
                <th onClick={()=>sorting("sum")}>Сумма</th>
                <th>ФИО покупателя</th>
            </thead>
            <tbody>

            {data.filter((d) => (d.name.toLowerCase().includes(filterOrderOrFio.toLowerCase()) || d.id.toString().startsWith(filterOrderOrFio.toString())) &&

                                (d.sum >= filterPriceFrom && d.sum <= filterPriceTo) &&

                                ((new Date((d.created.split(',')[0]).split('.')[2], (d.created.split(',')[0]).split('.')[1]-1, (d.created.split(',')[0]).split('.')[0]) >=
                                  new Date((filterDateFrom).split('-')[0], (filterDateFrom).split('-')[1]-1, (filterDateFrom).split('-')[2]) > 0) &&

                                (new Date((d.created.split(',')[0]).split('.')[2], (d.created.split(',')[0]).split('.')[1]-1, (d.created.split(',')[0]).split('.')[0]) <=
                                 new Date((filterDateTo).split('-')[0], (filterDateTo).split('-')[1]-1, (filterDateTo).split('-')[2]) > 0) &&
                                  
                                (filterStatus.includes(d.status.toLowerCase()))
                                )
                                ).map((d) => 
                (
                    <tr key={d.id}>
                        <td><Checkbox/></td>
                        <td>{d.id}</td>
                        <td>{d.created}</td>
                        <td className={`table__status ${StatusClass[d.status]}`}>{StatusIcon[d.status]}{d.status}</td>
                        <td>{d.positions}</td>
                        <td>{(d.sum !== '-') ? Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(d.sum) : d.sum}</td>
                        <td>{d.name}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
  );
}

const mapStateToProps = function(state) {
    //debugger
    return {
        filterOrderOrFio : state.filterReducer.filterOrderOrFio,
        filterDateFrom   : state.filterReducer.filterDateFrom,
        filterDateTo     : state.filterReducer.filterDateTo,
        filterStatus     : state.filterReducer.filterStatus,
        filterPriceFrom  : state.filterReducer.filterPriceFrom,
        filterPriceTo    : state.filterReducer.filterPriceTo,
    }

}

export default connect(mapStateToProps)(TableBody);