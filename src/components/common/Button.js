import './Button.css';
import { Icons } from './Icons';

const Button = ({
  className,
  icon,
  text,
  onClick
}) => { 
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {Icons[icon]!==null ? Icons[icon] : <></>} 
      <div class="button__text">{text}</div>
    </button>
  );
}

export default Button;