import Input from '../common/Input';
import Button from '../common/Button';
import './RightSidePanel.css';
import RightSidePanelHeader from './RightSidePanelHeader';
import RightSideTable from './RightSideTable'
import { connect } from 'react-redux';
import { selectors, actions, store } from "../../data";

function RightSidePanel({ created, status, cName, orderId, isExpanded }) {
  return (
    <div className="right_side_panel" style={{right:isExpanded ? 0 : '-30rem'}}>
      <RightSidePanelHeader/>
      <div className="right_side_panel__body">
          <Input 
            className="input__input_group-disabled"
            inputIconLeftClassName="hidden"
            iconRight="iconLocked"
            label="Дата и время заказа"
            value={created}
          ></Input>
          <Input 
            className="input__input_group-enabled"
            inputIconLeftClassName="hidden"
            inputIconRightClassName="hidden"
            label="ФИО покупателя"
            value={cName}
            onChange={(event) => {
              store.dispatch(actions.ordersFormNameEditAction(event.currentTarget.value));
            }}
          ></Input>
          <div className="right_side_panel__table">
            <RightSideTable/>
          </div>
          <Input 
            className="input__input_group-disabled"
            inputIconLeftClassName="hidden"
            iconRight="iconLocked"
            label="Уровень лояльности"
          ></Input>
          <Input 
            className="input__input_group-dropdown"
            inputIconLeftClassName="hidden"
            label="Статус заказа"
            iconRight="iconVarrow"
            value={status}
            onChange={(event) => {
              store.dispatch(actions.ordersFormStatusEditAction(event.currentTarget.value));
            }}
          ></Input>
          <Input 
            className="input__input_group-enabled"
            inputIconLeftClassName="hidden"
            label="Код подтверждения"
            iconRight="iconXmedium"
          ></Input>
      </div>
      <div className="right_side_panel__footer">
        <Button 
          className="button-large_solid"
          text="Сохранить"
          icon="iconCheckmark"
          onClick={() => {
            store.dispatch(actions.ordersFormSaveAction({ created, status, cName, orderId }));
          }}
        ></Button>
      </div>
    </div>
  );
}

const mapStateToProps = function(state) {

  return {
      created: selectors.getCreated(state),
      status: selectors.getStatus(state),
      cName: selectors.getCName(state),
      orderId: selectors.getOrderId(state),
      isExpanded: selectors.getIsExpandedForm(state),
  }

}

export default connect(mapStateToProps)(RightSidePanel);