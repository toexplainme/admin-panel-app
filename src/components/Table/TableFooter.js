import React, { useState } from 'react';
import './TableFooter.css';
import Button from '../common/Button';
import TableFooterDropdown from './TableFooterDropdown';
import { connect } from 'react-redux';
import { actions, store } from '../../data'
import { selectors } from "../../data";

function TableFooter({ currentPage, ordersList, pagingSize }) {
    
    const [isActive, setActive] = useState(false)
    const ordersCount = ordersList.length
    const totalPages = Math.ceil(ordersCount / pagingSize)
    const Pages = [...Array(totalPages).keys()]

    return (
        <div className="table__footer">
            <div className="table__footer-left">
                <div className="table__footer-selected">
                    Выбрано записей: 
                    <span className="table__footer-selected"> 4</span>
                </div>
                <Button 
                        className="button-tiny_solid"
                        text="Изменить статус"
                        icon="iconPencil"
                ></Button>
                <Button 
                        className="button-tiny_solid button-tiny_solid-danger"
                        text="Удалить"
                        icon="iconBin"
                        onClick = {() => setActive(!isActive)}
                ></Button>
                {isActive && <TableFooterDropdown/>}
            </div>
            <div className="table__footer-pagination">
                {Pages.map((page, index) => 
                <Button 
                        key={index+1} 
                        className={currentPage - 1 == page ? "button-tiny_solid button-tiny_solid-text_only" : "button-tiny_transparent button-tiny_transparent-text_only"}
                        text={index+1} 
                        onClick={() => {
                                store.dispatch(actions.ordersPagingAction(page));
                            }}
                ></Button>)}
                <div className="table__footer-pagination-last">
                    <Button 
                            className="button-tiny_transparent button-tiny_transparent-text_only"
                            text="#"
                    ></Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = function(state) {
    
        return {
                currentPage: selectors.getCurrentPage(state),
                pagingSize: selectors.getPagingSize(state),
                ordersList: selectors.getOrdersFiltered(state)
        }
    
    }
    
export default connect(mapStateToProps)(TableFooter);