import './PanelTop.css';
import Input from '../common/Input';
import Button from '../common/Button';
import {actions, store} from '../../data'

function PanelTop() {
  return (
        <div className="panel__top">
            <div className="filters">
                <Input 
                    className="input__search_group"
                    prefixClassName="hidden"
                    iconLeft="iconSearch"
                    placeholder="Номер заказа или ФИО"
                    onChange={(event) => {
                        store.dispatch(actions.ordersFilterSetOrderOrFioAction(event.currentTarget.value));
                    }}
                ></Input>
                <Button 
                    className="button-large_solid"
                    text="Фильтры"
                    icon="iconFilter"
                ></Button>
                <Button 
                    className="button-large_transparent"
                    text="Сбросить фильтры"
                    onClick={() => {
                        store.dispatch(actions.ordersFilterClearAllAction());
                    }}
                ></Button>
            </div>
            <Button 
                className="button-large_transparent"
                text="Загрузка"
                icon="iconRefresh"
            ></Button>
        </div>         
  );
}

export default PanelTop;