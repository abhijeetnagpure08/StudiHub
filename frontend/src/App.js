import './App.css';
import Certificate from './Components/Certificate';
import { Navbar } from './Components/Navbar';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainRoutes/>
      {/* <Certificate /> */}
    </div>
  );
}

export default App;
