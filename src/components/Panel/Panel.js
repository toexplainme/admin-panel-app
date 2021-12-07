import './Panel.css';
import PanelTop from './PanelTop';
import PanelCollapsible from './PanelCollapsible';

function Panel() {
  return (
    <div className="panel">
        <PanelTop/>
        <PanelCollapsible/>
    </div>
  );
}

export default Panel;