import './PanelDropdown.css';
import Checkbox from '../common/Checkbox';
import Input from '../common/Input';
import {actions, store} from '../../data'
import React from 'react'

class PanelDropdown extends React.Component {

  state = {
    checkedStatuses: {
      новый: false,
      расчет: false,
      подтвержден: false,
      выполнен: false,
      отменен: false,
      отложен: false,
    }
  }

    checkboxChoose = (e) => {
      const {name, checked} = e.target;
    
      this.setState(() => {
        const selectedStatus = this.state.checkedStatuses;
        return selectedStatus[name]=checked;
      });
    }

  render()
  {
    const selectedStatuses = Object.keys(this.state.checkedStatuses).filter((x) => this.state.checkedStatuses[x]);
    store.dispatch(actions.ordersFilterSetStatusAction(selectedStatuses))

    const Status = [
      "новый",
      "расчет",
      "подтвержден",
      "выполнен",
      "отменен",
      "отложен",
    ];

    const DropdownData = Status.map((label) => {
      return (
        <li className="dropdown__option">
            <Checkbox
              label={label}
              name={label}
              onChange={this.checkboxChoose}
            ></Checkbox>
        </li>
      );
    });

    return(
      <div className="dropdown_input">
        <Input 
          className="input__input_group-dropdown"
          label="Статус заказа"
          iconRight="iconVarrow"
          value={selectedStatuses}
        ></Input>
        <div className="dropdown">
          <ul className="dropdown__list">{DropdownData}</ul>
        </div>
      </div>
    );
  }
}

export default PanelDropdown;