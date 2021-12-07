import './Checkbox.css';

const Checkbox = ({
  className="",
  label="",
  value=1,
  name="",
  onChange,
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <input type="checkbox" className="checkbox__item" name={name} value={value} onChange={onChange}/>
        <label for="checkbox">{label}</label>
    </div>
  );
}

export default Checkbox;