import Input from '../common/Input';
import Button from '../common/Button';
import './RightSidePanel.css';
import RightSidePanelHeader from './RightSidePanelHeader';
import RightSideTable from './RightSideTable'

function RightSidePanel() {
  return (
    <div className="right_side_panel">
      <RightSidePanelHeader/>
      <div className="right_side_panel__body">
          <Input 
            className="input__input_group-disabled"
            inputIconLeftClassName="hidden"
            iconRight={5}
            label="Дата и время заказа"
          ></Input>
          <Input 
            className="input__input_group-enabled"
            inputIconLeftClassName="hidden"
            inputIconRightClassName="hidden"
            label="ФИО покупателя"
          ></Input>
          <div className="right_side_panel__table">
            <RightSideTable/>
          </div>
          <Input 
            className="input__input_group-disabled"
            inputIconLeftClassName="hidden"
            iconRight={5}
            label="Уровень лояльности"
          ></Input>
          <Input 
            className="input__input_group-dropdown"
            inputIconLeftClassName="hidden"
            label="Статус заказа"
            iconRight={11} 
          ></Input>
          <Input 
            className="input__input_group-enabled"
            inputIconLeftClassName="hidden"
            label="Код подтверждения"
            iconRight={13} 
          ></Input>
      </div>
      <div className="right_side_panel__footer">
        <Button 
          className="button-large_solid"
          text="Сохранить"
          icon={2}
        ></Button>
      </div>
    </div>
  );
}

export default RightSidePanel;