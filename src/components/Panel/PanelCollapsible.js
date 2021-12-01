import './PanelCollapsible.css';
import Input from '../common/Input';
import Button from '../common/Button';
import PanelDropdown from './PanelDropdown';
import {actions, store} from '../../data'
import React from 'react';

class PanelCollapsible extends React.Component {
  render() {
  return (
        <div className="panel__collapsible">
            <div className="interval">
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="с"
                    inputIconLeftClassName="hidden"
                    iconRight="iconXmedium"
                    label="Дата оформления"
                    placeholder="ДД.ММ.ГГГГ"
                    type="date"
                    onChange={(event) => {
                        store.dispatch(actions.ordersFilterSetDateFromAction(event.currentTarget.value));
                    }}
                ></Input>
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="по"
                    placeholder="ДД.ММ.ГГГГ"
                    type="date"
                    iconRight="iconXmedium"
                    onChange={(event) => {
                        store.dispatch(actions.ordersFilterSetDateToAction(event.currentTarget.value));
                    }}
                ></Input>
            </div>
            <PanelDropdown></PanelDropdown>
            <div className="interval">
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="от"
                    label="Сумма заказа"
                    iconRight="iconXmedium"
                    onChange={(event) => {
                        store.dispatch(actions.ordersFilterSetPriceFromAction(event.currentTarget.value));
                    }}
                ></Input>
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="до"
                    iconRight="iconXmedium"
                    onChange={(event) => {
                        store.dispatch(actions.ordersFilterSetPriceToAction(event.currentTarget.value));
                    }}
                ></Input>
            </div>
            <Button 
                className="button-large_transparent"
                text="Применить"
            ></Button>          
        </div>
  );
}
}

export default PanelCollapsible;