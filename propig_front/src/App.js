
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TimeLine from './pages/TimeLine';


import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom"
import AdminTimeLine from './pages/AdminTimeLine';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';

import ConfgPage from './pages/ConfigPage';
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/acompanhar-pedido' element={<TimeLine/>}/>
          <Route path='/admin-pedido' element={<AdminTimeLine/>}/>
          <Route path='/client' element={<ClientPage/>}/>
          <Route path='/dashboard' element={<AdminPage/>}/>
          <Route path='/config' element={<ConfgPage/>}/>
          <Route path='/login/admin' element={<AdminLogin/>}/>
          <Route path='/contatc' element={<Footer/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
