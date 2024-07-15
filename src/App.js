
import './App.css';
import Companies from './component/companies/Companies';
import Extra from './component/Extra/Extra';
import Header from './component/Header/Header';
import Residencies from "./component/residencies/Residencies"

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Extra/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
