import Button from '../common/Button';
import './RightSidePanelHeader.css';

const RightSidePanelHeader = ({
  orderId = ""
}) => { 
  return (
    <div className="right_side_panel__header">
         <div className="right_side_panel__header_title">{`Заявка #${orderId}`}</div>
         <Button 
            className="button-large_transparent-icon_only"
            icon="IconXlarge"
          ></Button>
    </div>
  );
}

export default RightSidePanelHeader;