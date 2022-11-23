import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConnectWallet from './Pages/ConnectWallet';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/connectwallet' element={<ConnectWallet/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
