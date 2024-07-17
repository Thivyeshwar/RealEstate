
import './App.css';
import Companies from './component/companies/Companies';
import Contact from './component/Contact/Contact';
import Extra from './component/Extra/Extra';
import Footer from './component/footer/Footer';
import GetStarted from './component/getSarted/GetStarted';
import Header from './component/Header/Header';
import Residencies from "./component/residencies/Residencies"
import Value from './component/value/Value';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Extra/>
      </div>
       <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
    
      <Footer/> 
    </div>
  );
}

export default App;
