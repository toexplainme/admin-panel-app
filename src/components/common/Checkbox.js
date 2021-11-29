import './Checkbox.css';

const Checkbox = ({
  className="",
  label="",
  value=1,
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <input type="checkbox" className="checkbox__item" name="checkbox" value={value}/>
        <label for="checkbox">{label}</label>
    </div>
  );
}

export default Checkbox;