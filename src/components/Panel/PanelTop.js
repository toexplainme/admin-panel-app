import './PanelTop.css';
import Input from '../common/Input';
import Button from '../common/Button';

function PanelTop() {
  return (
        <div className="panel__top">
            <div className="filters">
                <Input 
                    className="input__search_group"
                    prefixClassName="hidden"
                    iconLeft="iconSearch"
                    placeholder="Номер заказа или ФИО"
                ></Input>
                <Button 
                    className="button-large_solid"
                    text="Фильтры"
                    icon="iconFilter"
                ></Button>
                <Button 
                    className="button-large_transparent"
                    text="Сбросить фильтры"
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