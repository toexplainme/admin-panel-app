import './Header.css';
import Button from '../common/Button';

const Header = ({
  title
}) => {
  return (
    <div className="header">
        <h1 className="header__title">{title}</h1>
        <Button 
          className="button-large_transparent"
          text="Светлая тема"
          icon={10}
        ></Button>
    </div>
  );
}

export default Header;