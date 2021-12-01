import './Input.css';
import { Icons } from './Icons';

const Input = ({
  label="",
  className="",
  iconLeft="",
  iconRight="",
  prefixClassName="hidden",
  prefixLabel="",
  placeholder="",
  value,
  type="text",
  onClick,
  onChange,
  onInput
}) => {
  return (
    <div className="input">
        <label className="input__label" for="input">{label}</label>
        <div className={`input__input_group ${className}`}>
          <span className="input_group__icon-left">
            {Icons[iconLeft]!==null ? Icons[iconLeft] : <></>} 
          </span>
          <span className={`input_group__prefix ${prefixClassName}`}>{prefixLabel}</span>
          <input type={type} className="input_group__text" placeholder={placeholder} value={value} onClick={onClick} onChange={onChange} onInput={onInput}/>
          <span className="input_group__icon-right">
          {Icons[iconRight]!==null ? Icons[iconRight] : <></>} 
          </span>
        </div>
    </div>
  );
}

export default Input;