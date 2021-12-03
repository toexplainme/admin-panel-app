import './TableFooter.css';
import Button from '../common/Button';
import TableFooterDropdown from './TableFooterDropdown';
import React from 'react';

function TableFooter() {
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
                        icon={7}
                ></Button>
                <Button 
                        className="button-tiny_solid button-tiny_solid-danger"
                        text="Удалить"
                        icon={1}
                ></Button>
                <TableFooterDropdown/>
            </div>
            <div className="table__footer-pagination">
                <Button 
                        className="button-tiny_solid button-tiny_solid-text_only"
                        text="1"
                ></Button>
                <Button 
                        className="button-tiny_transparent button-tiny_transparent-text_only"
                        text="2"
                ></Button>
                <Button 
                        className="button-tiny_transparent button-tiny_transparent-text_only"
                        text="3"
                ></Button>
                <Button 
                        className="button-tiny_transparent button-tiny_transparent-text_only"
                        text="..."
                ></Button>
                <Button 
                        className="button-tiny_transparent button-tiny_transparent-text_only"
                        text="18"
                ></Button>
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

export default TableFooter;