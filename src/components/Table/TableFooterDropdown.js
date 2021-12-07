import React, { useState } from 'react';
import './TableFooterDropdown.css';
import Button from '../common/Button';

function TableFooterDropdown() {

  return (
    <div className="dropdown">
      <span className="dropdown__label">Удалить n записей?</span>
      <Button 
        className="button-tiny_transparent"
        text="Удалить"
      ></Button>
      <Button 
        className="button-tiny_solid"
        text="Отмена"
      ></Button>
    </div>
  );
}

export default TableFooterDropdown;