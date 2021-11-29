import './PanelDropdown.css';
import Checkbox from '../common/Checkbox';

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
        ></Checkbox>
    </li>
  );
});

function PanelDropdown() {
  return (
    <div className="dropdown">
      <ul className="dropdown__list">{DropdownData}</ul>
    </div>
  );
}

export default PanelDropdown;