import './PanelCollapsible.css';
import Input from '../common/Input';
import Button from '../common/Button';
import PanelDropdown from './PanelDropdown';

function PanelCollapsible() {
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
                ></Input>
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="по"
                    placeholder="ДД.ММ.ГГГГ"
                    iconRight="iconXmedium"
                ></Input>
            </div>
            <div className="dropdown_input">
                <Input 
                    className="input__input_group-dropdown"
                    label="Статус заказа"
                    iconRight="iconVarrow"
                ></Input>
                <PanelDropdown></PanelDropdown>
            </div>
            <div className="interval">
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="от"
                    label="Сумма заказа"
                    iconRight="iconXmedium"
                ></Input>
                <Input 
                    className="input__input_group-prefix"
                    prefixClassName="visible"
                    prefixLabel="до"
                    iconRight="iconXmedium"
                ></Input>
            </div>
            <Button 
                className="button-large_transparent"
                text="Применить"
            ></Button>          
        </div>
  );
}

export default PanelCollapsible;