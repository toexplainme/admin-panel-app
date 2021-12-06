import Button from '../common/Button';
import './RightSidePanelHeader.css';
import { connect } from 'react-redux';
import { selectors } from "../../data";

function RightSidePanelHeader({ orderId }) {

  return (
    <div className="right_side_panel__header">
         <div className="right_side_panel__header_title">{`Заявка #${orderId}`}</div>
         <Button 
            className="button-large_transparent-icon_only"
            icon="iconXlarge"
          ></Button>
    </div>
  );
}

const mapStateToProps = function(state) {

  return {
      orderId: selectors.getOrderId(state)
  }

}

export default connect(mapStateToProps)(RightSidePanelHeader);