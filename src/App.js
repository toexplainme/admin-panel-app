import './App.css';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import RightSidePanel from './components/RightSidePanel/RightSidePanel';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header
          title = "Список заказов"
        ></Header>  
        <Panel/>
        <Table/>
      </div>
      <RightSidePanel/>
    </div>
  );
}

export default App;
